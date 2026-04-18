import { useQueries } from '@tanstack/react-query'
import { useAuthStore } from '../store/authStore'
import { fetchPoliciesByProduct } from '../api/services/policyService'

const PRODUCT_CODES = ['TR01', 'HM01', 'MO01', 'PA01']

export function useDashboardPolicies() {
  const token = useAuthStore((state) => state.token)
  
  const queries = useQueries({
    queries: PRODUCT_CODES.map((productCode) => ({
      queryKey: ['policies', productCode] as const,
      queryFn: () => fetchPoliciesByProduct(productCode),
      enabled: !!token,
      staleTime: 60000,
      retry: 1,
      refetchOnWindowFocus: false,
    })),
  })
  
  return PRODUCT_CODES.map((productCode, index) => ({
    productCode,
    data: queries[index].data,
    isLoading: queries[index].isLoading,
    isError: queries[index].isError,
    error: queries[index].error,
    refetch: queries[index].refetch,
  }))
}
