import type { PolicyData } from '../types'

interface RawPolicyRecord {
  PolicyNo?: string
  ProductName?: string
  PlanCode?: string
  EffectiveDate?: string
  ExpiryDate?: string
  PolicyStatus?: number
  PolicyStatus_CodeDesc?: string
  PolicyCustomerList?: Array<{ CustomerName?: string }>
  PolicyType_CodeDesc?: string
  PolicyLobList?: Array<{
    PolicyRiskList?: Array<{
      LocAdd?: string
      BizUniqueNo?: string
      PAInsuredList?: Array<{ Name?: string }>
    }>
  }>
}

function deriveStatus(rawRecords: RawPolicyRecord[]): 'In Force' | 'Expired' | 'Not Covered' {
  if (!rawRecords || rawRecords.length === 0) {
    return 'Not Covered'
  }
  
  const activeRecord = rawRecords.find(r => r.PolicyStatus === 2)
  if (activeRecord) {
    return 'In Force'
  }
  
  const hasExpired = rawRecords.some(r => r.PolicyStatus === 3)
  return hasExpired ? 'Expired' : 'Not Covered'
}

export function mapPolicyResponse(rawRecords: RawPolicyRecord[], productCode: string): PolicyData {
  if (!rawRecords || rawRecords.length === 0) {
    return {
      policyNumber: null,
      planName: null,
      planCode: null,
      startDate: null,
      expiryDate: null,
      status: 'Not Covered',
      statusLabel: null,
      customerName: null,
      productSpecific: {},
    }
  }
  
  // Select first record where PolicyStatus === 2, else first record
  const selectedRecord = rawRecords.find(r => r.PolicyStatus === 2) || rawRecords[0]
  const status = deriveStatus(rawRecords)
  
  // Common field mapping
  const baseData: PolicyData = {
    policyNumber: selectedRecord.PolicyNo || null,
    planName: selectedRecord.ProductName || null,
    planCode: selectedRecord.PlanCode || null,
    startDate: selectedRecord.EffectiveDate || null,
    expiryDate: selectedRecord.ExpiryDate || null,
    status,
    statusLabel: selectedRecord.PolicyStatus_CodeDesc || null,
    customerName: selectedRecord.PolicyCustomerList?.[0]?.CustomerName || null,
    productSpecific: {},
  }
  
  // Product-specific mapping
  const riskData = selectedRecord.PolicyLobList?.[0]?.PolicyRiskList?.[0]
  
  switch (productCode) {
    case 'TR01':
      baseData.productSpecific = {
        tripType: selectedRecord.PolicyType_CodeDesc || null,
      }
      break
    case 'HM01':
      baseData.productSpecific = {
        insuredAddress: riskData?.LocAdd || null,
      }
      break
    case 'MO01':
      baseData.productSpecific = {
        vehiclePlateNumber: riskData?.BizUniqueNo || null,
      }
      break
    case 'PA01':
      baseData.productSpecific = {
        helperName: riskData?.PAInsuredList?.[0]?.Name || null,
      }
      break
  }
  
  return baseData
}
