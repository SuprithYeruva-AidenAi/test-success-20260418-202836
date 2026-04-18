import { Home, Shield, File, Settings, PanelLeft, HelpCircle, Bell, ChevronUp, ArrowRight, ChevronRight } from 'lucide-react'
import { useDashboardPolicies } from '../hooks/useDashboardPolicies'
import PolicyCard from '../components/PolicyCard'

export default function Dashboard() {
  const policies = useDashboardPolicies()

  // Derive coverage count from policies that are not 'Not Covered' and not loading/error
  const coveredCount = policies.filter(
    (p) => !p.isLoading && !p.isError && p.data && p.data.status !== 'Not Covered'
  ).length

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar */}
        <div className="w-full md:w-[240px] md:max-w-[240px] bg-white border-r border-[#000000] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] flex flex-col justify-between py-[24px] px-[16px] gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[10px]">
              <img src="https://s3-alpha-sig.figma.com/img/26ec/3ab4/0588c7482da725dcdeb68b2897f9bde2?Expires=1777248000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PSA09KnD8BDeEeZZ6cI~VtwcDg22Moj9P1AO5xeTXiY2OJx-KvohRLWP4pKNn82Yr9ydUl6NcjVgbc1hOwTD-Rywd-d1OnxemrSTgf0-pXlYz2parVqr49Sw1Gd3dnsRg-BLI3dWeI-TMa4dM1GVL74lZlH3ygrKx6Pyviq5vT9DPYqXEAmP0yu0I2USnzJAuFiD3vJXUmm2IbHEPc~ku69IKXveWcnCROgUSCdGQACnO4zfr-rq1g5~bkr-vOTF8SXKiVIeC8AwGjYJngONCgc41BfkoJhM1VotERpKTJfol4vxIaO~zccPFywRiKydECQS7nU0gULQlDtMU-VHFw__" className="w-[100px] h-[51px]" alt="UOI Logo" />
            </div>
            
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center py-[10px] px-[12px] gap-[12px] bg-white bg-gradient-to-r from-[#005eb8]/10 to-[#5c55eb]/10 rounded-[8px]">
                <Home className="w-[24px] h-[24px]" />
                <p className="text-[16px] font-medium leading-[24px] text-[#005eb8] font-[Noto_Sans]">Dashboard</p>
              </div>
              <div className="flex items-center py-[10px] px-[12px] gap-[12px] rounded-[8px] cursor-pointer hover:bg-gray-50">
                <Shield className="w-[24px] h-[24px]" />
                <p className="text-[16px] leading-[24px] text-[#212121] font-[Noto_Sans]">Policies</p>
              </div>
              <div className="flex items-center py-[10px] px-[12px] gap-[12px] rounded-[8px] cursor-pointer hover:bg-gray-50">
                <File className="w-[24px] h-[24px]" />
                <p className="text-[16px] leading-[24px] text-[#212121] font-[Noto_Sans]">Claims</p>
              </div>
              <div className="flex items-center py-[10px] px-[12px] gap-[12px] bg-white rounded-[8px] cursor-pointer hover:bg-gray-50">
                <Settings className="w-[24px] h-[24px]" />
                <p className="text-[16px] leading-[24px] text-[#212121] font-[Noto_Sans]">Rewards</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end items-center gap-[12px]">
            <PanelLeft className="w-[24px] h-[24px] cursor-pointer" />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="w-full h-[56px] flex items-center justify-between py-[12px] px-[24px] bg-white border-b border-[#000000]">
            <div className="flex-1" />
            <div className="flex items-center gap-[20px]">
              <HelpCircle className="w-[24px] h-[24px] cursor-pointer" />
              <Bell className="w-[24px] h-[24px] cursor-pointer" />
              <div className="w-[1px] h-[32px] bg-[#000000]/9 rounded-full" />
              <div className="w-[56px] h-[32px] flex items-center justify-center bg-[#b3d1ff] rounded text-[#005eb8] font-medium">
                CW
              </div>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="flex-1 flex flex-col items-center py-[48px] px-[16px] md:px-[32px] pb-[100px] gap-[28px] bg-white bg-gradient-to-b from-[#005eb8]/7 to-[#5c55eb]/7 overflow-hidden">
            <div className="w-full max-w-[980px] flex flex-col gap-[32px]">
              {/* Header Section */}
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col justify-center gap-[12px]">
                  <h1 className="text-[24px] md:text-[32px] font-bold leading-[28.8px] md:leading-[38.4px] text-[#212121] font-[Noto_Sans]">Good evening, Chris 👋</h1>
                  <p className="text-[16px] leading-[24px] text-[#6e6e6e] font-[Noto_Sans]">Here's an overview of your insurance policies and recent activities</p>
                </div>
                
                <div className="w-full h-[270px] flex items-center justify-center rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] overflow-hidden">
                  <img src="https://s3-alpha-sig.figma.com/img/b174/518e/b937b0d57f4c2d0945d9af6744ea37cb?Expires=1777248000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UyaLqNl7Wjr20aSZe5n6rCoLqShVIdKJr~u2oUE8Czbg1mr9H55m-vMWkgHD8WWAsiPtbWgdkhkEVYzmnD6IzmmR4V8CwpsI9vLiERjKtd2-R8ptwU8XIiPR4f5yUkMNk6m~FiYM64BTzCQ3snLocgWRglWTs6DS8Mn1n~9c07XUNCAUGQZQ7eRA5A89BmHCBaaxPiN7Z8QVt4UoSH7ZqdvF8dqiupRBP4~NoY0sY3TuA5puiCBL7VBYs9Ede~OOH9rJEUm6VUkr2mBhKN7XJ1jlehJHn3McGWRQlFls~yHIQuCW44OYjLXmCg~gand4K4vjkZ3PA0Nh5Z~yPUXzHA__" className="w-full h-full object-cover rounded-[8px]" alt="Marketing Banner" />
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center justify-between gap-[16px]">
                  <h2 className="text-[20px] font-bold leading-[24px] text-[#212121] font-[Noto_Sans]">Quick Actions</h2>
                </div>
                
                <div className="flex flex-col md:flex-row gap-[20px]">
                  <div className="flex-1 flex flex-col p-[16px] gap-[24px] bg-white rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="flex gap-[12px]">
                      <ChevronUp className="w-[24px] h-[24px]" />
                      <div className="flex flex-col justify-center gap-[4px] flex-1">
                        <p className="text-[16px] font-medium leading-[24px] text-[#212121] font-[Noto_Sans]">Submit Claim</p>
                        <p className="text-[14px] leading-[21px] text-[#6e6e6e] font-[Noto_Sans]">Prepare documents for claims</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col p-[16px] gap-[24px] bg-white rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="flex gap-[12px]">
                      <div className="w-[24px] h-[24px] flex items-center justify-center bg-white bg-gradient-to-r from-[#005eb8]/10 to-[#5c55eb]/10 rounded-[75px]" />
                      <div className="flex flex-col justify-center gap-[4px] flex-1">
                        <p className="text-[16px] font-medium leading-[24px] text-[#212121] font-[Noto_Sans]">Buy New Policy</p>
                        <p className="text-[14px] leading-[21px] text-[#6e6e6e] font-[Noto_Sans]">Explore a wide range of policies</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col p-[16px] gap-[24px] bg-white rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="flex gap-[12px]">
                      <div className="w-[24px] h-[24px] flex items-center justify-center bg-white bg-gradient-to-r from-[#005eb8]/10 to-[#5c55eb]/10 rounded-[75px]" />
                      <div className="flex flex-col justify-center gap-[4px] flex-1">
                        <p className="text-[16px] font-medium leading-[24px] text-[#212121] font-[Noto_Sans]">Help & Support</p>
                        <p className="text-[14px] leading-[21px] text-[#6e6e6e] font-[Noto_Sans]">Learn more about our FAQs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Your Coverage */}
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[28px]">
                  <div className="flex items-center gap-[8px] flex-1">
                    <h2 className="text-[20px] font-bold leading-[24px] text-[#212121] font-[Noto_Sans]">Your Coverage</h2>
                    <p className="text-[20px] leading-[24px] text-[#6e6e6e] font-[Noto_Sans]">({coveredCount})</p>
                  </div>
                  <div className="flex items-center gap-[12px] cursor-pointer">
                    <p className="text-[#0d6efd] font-[Noto_Sans]">View All</p>
                    <ArrowRight className="w-[16px] h-[16px] text-[#0d6efd]" />
                  </div>
                </div>
                
                {/* Policy Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                  {policies.map((policy) => (
                    <PolicyCard
                      key={policy.productCode}
                      productCode={policy.productCode}
                      data={policy.data}
                      isLoading={policy.isLoading}
                      isError={policy.isError}
                      error={policy.error}
                      refetch={policy.refetch}
                    />
                  ))}
                </div>
              </div>
              
              {/* Rewards */}
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[28px]">
                  <h2 className="text-[20px] font-bold leading-[24px] text-[#212121] font-[Noto_Sans]">Rewards</h2>
                  <div className="flex items-center gap-[12px] cursor-pointer">
                    <p className="text-[#0d6efd] font-[Noto_Sans]">View All</p>
                    <ArrowRight className="w-[16px] h-[16px] text-[#0d6efd]" />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-[20px] overflow-hidden max-w-[980px]">
                  {/* Reward Card 1 */}
                  <div className="w-full md:w-[313px] flex flex-col shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] relative">
                    <div className="w-full h-[176px] bg-gradient-to-br from-[#005eb8] to-[#5c55eb] rounded-tl-[8px] rounded-tr-[8px]" />
                    <div className="flex-1 flex flex-col justify-between p-[16px] gap-[24px] bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <div className="flex flex-col justify-center gap-[12px]">
                        <p className="text-[16px] font-medium leading-[24px] text-[#212121] font-[Noto_Sans]">10% off KITH by Casa Products</p>
                        <p className="text-[14px] leading-[21px] text-[#6e6e6e] font-[Noto_Sans]">Enter promo code UOIKITH10 at checkout on www.kith.sg to enjoy the offer.</p>
                      </div>
                      <button className="flex items-center justify-center py-[12px] px-[16px] gap-[10px] bg-[#005eb8] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
                        <p className="text-[16px] font-medium leading-[24px] text-white font-[Noto_Sans]">Shop Now</p>
                      </button>
                    </div>
                  </div>
                  
                  {/* Reward Card 2 */}
                  <div className="w-full md:w-[313px] flex flex-col shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] relative">
                    <div className="w-full h-[176px] bg-gradient-to-br from-[#5c55eb] to-[#005eb8] rounded-tl-[8px] rounded-tr-[8px]" />
                    <div className="flex-1 flex flex-col justify-between p-[16px] gap-[24px] bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <div className="flex flex-col justify-center gap-[12px]">
                        <p className="text-[16px] font-medium leading-[24px] text-[#212121] font-[Noto_Sans]">10% off Cat & the Fiddle Cakes</p>
                        <p className="text-[14px] leading-[21px] text-[#6e6e6e] font-[Noto_Sans]">Enter promo code UOICATFIDDLE10 at checkout on www.catandthefiddle to enjoy the offer.</p>
                      </div>
                      <button className="flex items-center justify-center py-[12px] px-[16px] gap-[10px] bg-[#005eb8] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
                        <p className="text-[16px] font-medium leading-[24px] text-white font-[Noto_Sans]">Shop Now</p>
                      </button>
                    </div>
                  </div>
                  
                  {/* Reward Card 3 */}
                  <div className="w-full md:w-[313px] flex flex-col shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] relative">
                    <div className="w-full h-[176px] bg-gradient-to-br from-[#005eb8] to-[#5c55eb] rounded-tl-[8px] rounded-tr-[8px]" />
                    <div className="flex flex-col p-[16px] gap-[24px] bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <div className="flex flex-col justify-center gap-[12px]">
                        <p className="text-[16px] font-medium leading-[24px] text-[#212121] font-[Noto_Sans]">$5 Credit Reward for HEYMAX New User Sign Up</p>
                        <p className="text-[14px] leading-[21px] text-[#6e6e6e] font-[Noto_Sans]">Enter promo code UOIHEYMAX5 during registration to enjoy $5 credit.</p>
                      </div>
                      <button className="flex items-center justify-center py-[12px] px-[16px] gap-[10px] bg-[#005eb8] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
                        <p className="text-[16px] font-medium leading-[24px] text-white font-[Noto_Sans]">Sign Up</p>
                      </button>
                    </div>
                  </div>
                  
                  <ChevronRight className="w-[40px] h-[40px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full h-[53px] flex items-center justify-between py-[16px] px-[24px] bg-[#005eb8]">
        <p className="text-[14px] leading-[21px] text-white font-[Noto_Sans]">Copyright © 2026 United Overseas Insurance Limited Co. Reg. No. 197100152R.</p>
        <p className="text-[14px] leading-[21px] text-right text-white font-[Noto_Sans]">All Rights Reserved.</p>
      </div>
    </div>
  )
}
