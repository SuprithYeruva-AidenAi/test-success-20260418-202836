import { ChevronRight, Plane, Car, Home, User } from 'lucide-react'
import type { PolicyData } from '../api/types'

interface PolicyCardProps {
  productCode: string
  data?: PolicyData
  isLoading: boolean
  isError: boolean
  error?: unknown
  refetch: () => void
}

const PRODUCT_NAMES: Record<string, string> = {
  TR01: 'Travel',
  HM01: 'Home',
  MO01: 'Motor',
  PA01: 'Helper',
}

const PRODUCT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  TR01: Plane,
  HM01: Home,
  MO01: Car,
  PA01: User,
}

function formatDate(dateStr: string | null): string | null {
  if (!dateStr) return null
  // Attempt to parse and format; if invalid, return as-is
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  } catch {
    return dateStr
  }
}

function getProductSpecificLabel(productCode: string, data: PolicyData): string | null {
  switch (productCode) {
    case 'TR01':
      return data.productSpecific.tripType ? `Trip Type: ${data.productSpecific.tripType}` : null
    case 'HM01':
      return data.productSpecific.insuredAddress ? `Address: ${data.productSpecific.insuredAddress}` : null
    case 'MO01':
      return data.productSpecific.vehiclePlateNumber ? `Plate: ${data.productSpecific.vehiclePlateNumber}` : null
    case 'PA01':
      return data.productSpecific.helperName ? `Helper: ${data.productSpecific.helperName}` : null
    default:
      return null
  }
}

export default function PolicyCard({ productCode, data, isLoading, isError, refetch }: PolicyCardProps) {
  const productName = PRODUCT_NAMES[productCode] ?? productCode
  const IconComponent = PRODUCT_ICONS[productCode] ?? User

  if (isLoading) {
    return (
      <div className="w-full md:w-[313px] h-[260px] max-h-[260px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
        <div className="h-[59px] max-h-[250px] bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-[#000000] p-[16px] flex items-center gap-[8px]">
          <div className="flex items-center gap-[8px] flex-1">
            <div className="w-[24px] h-[24px] bg-gray-200 rounded animate-pulse" />
            <div className="w-[60px] h-[16px] bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="w-[70px] h-[25px] bg-gray-200 rounded-[24px] animate-pulse" />
        </div>
        <div className="flex-1 bg-white rounded-bl-[8px] rounded-br-[8px] p-[16px] space-y-[12px]">
          <div className="w-full h-[16px] bg-gray-200 rounded animate-pulse" />
          <div className="w-3/4 h-[16px] bg-gray-200 rounded animate-pulse" />
          <div className="w-1/2 h-[16px] bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="w-full md:w-[313px] h-[260px] max-h-[260px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
        <div className="h-[59px] max-h-[250px] bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-[#000000] p-[16px] flex items-center gap-[8px]">
          <div className="flex items-center gap-[8px] flex-1">
            <IconComponent className="w-[24px] h-[24px]" />
            <p className="text-[16px] font-medium leading-[24px] text-[#212121]">{productName}</p>
          </div>
          <div className="flex items-center justify-center py-[4px] px-[8px] gap-[4px] bg-[#f5f5f5] rounded-[24px]">
            <p className="text-[12px] font-medium leading-[16.8px] text-[#8d8d8d]">ERROR</p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-bl-[8px] rounded-br-[8px] p-[16px] flex flex-col justify-center items-center gap-[12px]">
          <p className="text-[14px] text-[#212121] text-center">Failed to load {productName} policies</p>
          <button
            onClick={() => refetch()}
            className="px-[16px] py-[8px] bg-[#005eb8] text-white text-[14px] font-medium rounded-[8px] hover:opacity-90 transition-opacity"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!data) {
    return null
  }

  const statusBadgeColor =
    data.status === 'In Force'
      ? 'bg-[#005eb8] text-white'
      : data.status === 'Expired'
      ? 'bg-[#fde8e8] text-[#c0392b]'
      : 'bg-[#f5f5f5] text-[#8d8d8d]'
  const statusText =
    data.status === 'Not Covered' ? 'NOT COVERED' : data.status.toUpperCase()

  const productSpecificLabel = getProductSpecificLabel(productCode, data)
  const formattedStart = formatDate(data.startDate)
  const formattedExpiry = formatDate(data.expiryDate)

  return (
    <div className="w-full md:w-[313px] min-h-[260px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
      {/* Card Header */}
      <div className="h-[59px] bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-[#000000] p-[16px] flex items-center gap-[8px]">
        <div className="flex items-center gap-[8px] flex-1">
          <IconComponent className="w-[24px] h-[24px]" />
          <p className="text-[16px] font-medium leading-[24px] text-[#212121]">{productName}</p>
        </div>
        <div className={`flex items-center justify-center py-[4px] px-[8px] gap-[4px] rounded-[24px] ${statusBadgeColor}`}>
          <p className="text-[12px] font-medium leading-[16.8px]">{statusText}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 bg-white rounded-bl-[8px] rounded-br-[8px] p-[16px] flex flex-col gap-[10px]">
        {data.status === 'Not Covered' ? (
          <>
            <p className="text-[16px] leading-[24px] text-[#212121]">
              Get {productName.toLowerCase()} coverage today with your pre-filled details.
            </p>
            <button className="mt-auto flex items-center justify-center py-[8px] px-[16px] bg-[#005eb8] text-white text-[14px] font-medium rounded-[8px] hover:opacity-90 transition-opacity">
              Get a Quote
            </button>
          </>
        ) : (
          <>
            {/* Plan Name */}
            {data.planName && (
              <p className="text-[14px] font-medium leading-[21px] text-[#212121]">{data.planName}</p>
            )}

            {/* Customer Name */}
            {data.customerName && (
              <p className="text-[13px] leading-[20px] text-[#6e6e6e]">Insured: {data.customerName}</p>
            )}

            {/* Policy Number */}
            {data.policyNumber && (
              <div className="flex items-center justify-between p-[12px] gap-[4px] bg-[#f9f9f9] rounded-[12px] cursor-pointer hover:bg-gray-100">
                <div className="flex flex-col gap-[4px] flex-1">
                  <p className="text-[14px] leading-[21px] text-[#6e6e6e]">Policy No: {data.policyNumber}</p>
                </div>
                <ChevronRight className="w-[16px] h-[16px]" />
              </div>
            )}

            {/* Effective & Expiry Dates */}
            {(formattedStart || formattedExpiry) && (
              <div className="flex items-center gap-[8px] text-[13px] text-[#6e6e6e]">
                {formattedStart && <span>From: {formattedStart}</span>}
                {formattedStart && formattedExpiry && <span className="text-[#8d8d8d]">–</span>}
                {formattedExpiry && <span>To: {formattedExpiry}</span>}
              </div>
            )}

            {/* Product-Specific Field */}
            {productSpecificLabel && (
              <p className="text-[13px] leading-[20px] text-[#6e6e6e]">{productSpecificLabel}</p>
            )}

            {/* Travel upsell CTA */}
            {productCode === 'TR01' && data.status === 'In Force' && (
              <div className="flex items-center p-[8px] gap-[8px] bg-white border border-[#005eb8] rounded-[8px] mt-auto">
                <div className="flex flex-col gap-[4px] flex-1">
                  <p className="text-[14px] font-medium leading-[21px] bg-gradient-to-r from-[#005eb8] to-[#5c55eb] bg-clip-text text-transparent">
                    New trip? Get covered in 2 minutes.
                  </p>
                </div>
                <button className="flex items-center justify-center py-[8px] px-[16px] gap-[10px] bg-[#005eb8] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
                  <p className="text-[14px] font-medium leading-[21px] text-white">Buy Now</p>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
