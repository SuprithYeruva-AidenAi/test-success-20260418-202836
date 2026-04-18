import apiClient from '../apiClient'
import { ApiError } from '../errors'
import { mapPolicyResponse } from '../mappers/policyMapper'
import type { PolicyData } from '../types'

export async function fetchPoliciesByProduct(productCode: string): Promise<PolicyData> {
  try {
    const response = await apiClient.get(`/uoi/data/orders`, {
      params: {
        productCode,
        pageSize: 4,
        pageNo: 1,
      },
    })
    
    return mapPolicyResponse(response.data?.records || [], productCode)
  } catch (error: unknown) {
    const err = error as Record<string, unknown>
    const response = err['response'] as Record<string, unknown> | undefined
    const config = err['config'] as Record<string, unknown> | undefined
    const status = (response?.['status'] as number) || 0
    const url = (config?.['url'] as string) || ''
    const responseData = response?.['data'] as Record<string, unknown> | undefined
    const message = (responseData?.['message'] as string) || (err['message'] as string) || 'Unknown error'
    
    throw new ApiError(productCode, status, url, message)
  }
}
