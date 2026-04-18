export interface PolicyData {
  policyNumber: string | null
  planName: string | null
  planCode: string | null
  startDate: string | null
  expiryDate: string | null
  status: 'In Force' | 'Expired' | 'Not Covered'
  statusLabel: string | null
  customerName: string | null
  productSpecific: {
    tripType?: string | null
    insuredAddress?: string | null
    vehiclePlateNumber?: string | null
    helperName?: string | null
  }
}
