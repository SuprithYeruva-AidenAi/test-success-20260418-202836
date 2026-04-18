import { useState } from 'react'
import { Home, Shield, File, Settings, PanelLeft, HelpCircle, Bell, User, ChevronUp, ArrowRight, ShieldCheck, ChevronRight, Car, X } from 'lucide-react'

export default function OpenNotification() {
  const [showNotifications, setShowNotifications] = useState(true)

  return (
    <div className="w-full min-h-screen flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar - hidden on mobile, visible on desktop */}
        <div className="hidden md:flex md:flex-col md:justify-between md:w-[240px] md:max-w-[240px] md:p-[24px] md:gap-[24px] bg-white border-r border-black shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-[24px] w-full">
            <div className="flex flex-col gap-[10px] w-full">
              <img src="https://s3-alpha-sig.figma.com/img/26ec/3ab4/0588c7482da725dcdeb68b2897f9bde2?Expires=1777248000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PSA09KnD8BDeEeZZ6cI~VtwcDg22Moj9P1AO5xeTXiY2OJx-KvohRLWP4pKNn82Yr9ydUl6NcjVgbc1hOwTD-Rywd-d1OnxemrSTgf0-pXlYz2parVqr49Sw1Gd3dnsRg-BLI3dWeI-TMa4dM1GVL74lZlH3ygrKx6Pyviq5vT9DPYqXEAmP0yu0I2USnzJAuFiD3vJXUmm2IbHEPc~ku69IKXveWcnCROgUSCdGQACnO4zfr-rq1g5~bkr-vOTF8SXKiVIeC8AwGjYJngONCgc41BfkoJhM1VotERpKTJfol4vxIaO~zccPFywRiKydECQS7nU0gULQlDtMU-VHFw__" className="w-[100px] h-[51px]" alt="UOI Logo" />
            </div>
            <div className="flex flex-col gap-[12px] w-full">
              <div className="flex flex-row items-center p-[10px] gap-[12px] w-full bg-white bg-gradient-to-r from-[#005eb8]/10 to-[#5c55eb]/10 rounded-[8px]">
                <Home className="w-[24px] h-[24px] text-[#005eb8]" />
                <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-[#005eb8]">Dashboard</span>
              </div>
              <div className="flex flex-row items-center p-[10px] gap-[12px] w-full rounded-[8px]">
                <Shield className="w-[24px] h-[24px] text-[#212121]" />
                <span className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#212121]">Policies</span>
              </div>
              <div className="flex flex-row items-center p-[10px] gap-[12px] w-full rounded-[8px]">
                <File className="w-[24px] h-[24px] text-[#212121]" />
                <span className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#212121]">Claims</span>
              </div>
              <div className="flex flex-row items-center p-[10px] gap-[12px] w-full bg-white rounded-[8px]">
                <Settings className="w-[24px] h-[24px] text-[#212121]" />
                <span className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#212121]">Rewards</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center gap-[12px] w-full">
            <PanelLeft className="w-[24px] h-[24px] text-[#212121]" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex flex-row justify-between items-center p-[12px] md:px-[24px] gap-[16px] md:gap-[447px] w-full bg-white border-b border-black">
            <div className="flex-1" />
            <div className="flex flex-row justify-end items-center gap-[20px] flex-1">
              <HelpCircle className="w-[24px] h-[24px] text-[#212121]" />
              <Bell 
                className="w-[24px] h-[24px] text-[#212121] cursor-pointer" 
                onClick={() => setShowNotifications(!showNotifications)}
              />
              <div className="w-[1px] h-[32px] bg-black/[0.09] rounded-full" />
              <User className="w-[56px] h-[32px] text-[#b3d1ff]" />
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 flex flex-col items-center p-[16px] md:p-[48px] md:pb-[100px] gap-[28px] bg-white bg-gradient-to-b from-[#005eb8]/7 to-[#5c55eb]/7 overflow-auto">
            <div className="flex flex-col gap-[32px] w-full max-w-[980px]">
              {/* Welcome Section */}
              <div className="flex flex-col gap-[24px] w-full">
                <div className="flex flex-col justify-center gap-[12px] w-full">
                  <h1 className="font-[Noto_Sans] text-[24px] md:text-[32px] font-bold leading-[28.8px] md:leading-[38.4px] text-[#212121]">Good evening, Chris 👋</h1>
                  <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#6e6e6e]">Here's an overview of your insurance policies and recent activities</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[12px] w-full h-[200px] md:h-[270px] rounded-[8px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                  <img src="https://s3-alpha-sig.figma.com/img/b174/518e/b937b0d57f4c2d0945d9af6744ea37cb?Expires=1777248000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UyaLqNl7Wjr20aSZe5n6rCoLqShVIdKJr~u2oUE8Czbg1mr9H55m-vMWkgHD8WWAsiPtbWgdkhkEVYzmnD6IzmmR4V8CwpsI9vLiERjKtd2-R8ptwU8XIiPR4f5yUkMNk6m~FiYM64BTzCQ3snLocgWRglWTs6DS8Mn1n~9c07XUNCAUGQZQ7eRA5A89BmHCBaaxPiN7Z8QVt4UoSH7ZqdvF8dqiupRBP4~NoY0sY3TuA5puiCBL7VBYs9Ede~OOH9rJEUm6VUkr2mBhKN7XJ1jlehJHn3McGWRQlFls~yHIQuCW44OYjLXmCg~gand4K4vjkZ3PA0Nh5Z~yPUXzHA__" className="w-full h-full object-cover rounded-[8px]" alt="Marketing Banner" />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col gap-[20px] w-full">
                <div className="flex flex-row justify-between items-center gap-[16px] w-full">
                  <h2 className="font-[Noto_Sans] text-[20px] font-bold leading-[24px] text-[#212121]">Quick Actions</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-[20px] w-full">
                  <div className="flex flex-col p-[16px] gap-[24px] flex-1 bg-white rounded-[8px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-row gap-[12px] w-full">
                      <ChevronUp className="w-[24px] h-[24px] text-[#212121]" />
                      <div className="flex flex-col justify-center gap-[4px] flex-1">
                        <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-[#212121]">Submit Claim</span>
                        <span className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">Prepare documents for claims</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-[16px] gap-[24px] flex-1 bg-white rounded-[8px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-row gap-[12px] w-full">
                      <div className="flex flex-row justify-center items-center p-[3px] gap-[5px] w-[24px] h-[24px] bg-white bg-gradient-to-r from-[#005eb8]/10 to-[#5c55eb]/10 rounded-[75px]" />
                      <div className="flex flex-col justify-center gap-[4px] flex-1">
                        <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-[#212121]">Buy Policy</span>
                        <span className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">Explore a wide range of policies</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-[16px] gap-[24px] flex-1 bg-white rounded-[8px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-row gap-[12px] w-full">
                      <div className="flex flex-row justify-center items-center p-[3px] gap-[5px] w-[24px] h-[24px] bg-white bg-gradient-to-r from-[#005eb8]/10 to-[#5c55eb]/10 rounded-[75px]" />
                      <div className="flex flex-col justify-center gap-[4px] flex-1">
                        <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-[#212121]">Help & Support</span>
                        <span className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">Learn more about our FAQs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Coverage */}
              <div className="flex flex-col gap-[20px] w-full">
                <div className="flex flex-row items-center gap-[28px] w-full">
                  <div className="flex flex-row items-center gap-[8px] flex-1">
                    <h2 className="font-[Noto_Sans] text-[20px] font-bold leading-[24px] text-[#212121]">Your Coverage</h2>
                    <span className="font-[Noto_Sans] text-[20px] leading-[24px] text-[#6e6e6e]">(5)</span>
                  </div>
                  <div className="flex flex-row items-center gap-[12px] cursor-pointer">
                    <ArrowRight className="w-[60px] h-[24px] text-[#0d6efd]" />
                    <ArrowRight className="w-[16px] h-[16px] text-[#212121]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full">
                  {/* Travel Card */}
                  <div className="flex flex-col overflow-hidden max-h-[260px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col p-[16px] gap-[24px] w-full bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-black">
                      <div className="flex flex-row items-center gap-[8px] w-full">
                        <div className="flex flex-row items-center gap-[8px] flex-1">
                          <div className="flex flex-col justify-center items-center gap-[10px] w-[24px] h-[24px]" />
                          <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-center text-[#212121]">Travel</span>
                        </div>
                        <ShieldCheck className="w-[70px] h-[25px] text-[#005eb8]" />
                      </div>
                    </div>
                    <div className="flex flex-col p-[16px] gap-[24px] flex-1 bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <div className="flex flex-col gap-[16px] w-full">
                        <div className="flex flex-row items-center p-[8px] gap-[8px] w-full bg-white bg-gradient-to-b from-[#005eb8]/7 to-[#5c55eb]/7 rounded-[8px] border">
                          <div className="flex flex-col gap-[4px] flex-1">
                            <span className="font-[Noto_Sans] text-[14px] font-medium leading-[21px] bg-gradient-to-r from-[#005eb8] to-[#5c55eb] bg-clip-text text-transparent">New trip? Get covered in 2 minutes.</span>
                          </div>
                          <div className="flex flex-row justify-center items-center p-[8px] gap-[10px] h-[32px] bg-[#005eb8] rounded-[8px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                            <span className="font-[Noto_Sans] text-[14px] font-medium leading-[21px] text-white">Buy Now</span>
                          </div>
                        </div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex flex-row items-center p-[12px] gap-[4px] w-full bg-[#f9f9f9] rounded-[12px]">
                            <div className="flex flex-col gap-[4px] flex-1">
                              <div className="flex flex-row items-center gap-[8px] w-full" />
                              <span className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">Policy No: PNF320104124A23</span>
                            </div>
                            <ChevronRight className="w-[16px] h-[16px] text-[#212121]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Motor Card */}
                  <div className="flex flex-col overflow-hidden max-h-[260px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col p-[16px] gap-[24px] w-full bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-black">
                      <div className="flex flex-row items-center gap-[8px] w-full">
                        <div className="flex flex-row items-center gap-[8px] flex-1">
                          <Car className="w-[24px] h-[24px] text-[#212121]" />
                          <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-center text-[#212121]">Motor</span>
                        </div>
                        <div className="flex flex-row justify-center items-center p-[4px] gap-[4px] bg-[#f5f5f5] rounded-[24px]">
                          <span className="font-[Noto_Sans] text-[12px] font-medium leading-[16.8px] text-center text-[#8d8d8d]">NOT COVERED</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[16px] gap-[24px] flex-1 bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <span className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#212121]">Protect your car from $X/year with your pre-filled details. Get quote here.</span>
                    </div>
                  </div>

                  {/* Helper Card */}
                  <div className="flex flex-col overflow-hidden max-h-[260px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col p-[16px] gap-[24px] w-full bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-black">
                      <div className="flex flex-row items-center gap-[8px] w-full">
                        <div className="flex flex-row items-center gap-[8px] flex-1">
                          <div className="w-[24px] h-[24px] overflow-hidden" />
                          <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-center text-[#212121]">Helper</span>
                        </div>
                        <ShieldCheck className="w-[70px] h-[25px] text-[#005eb8]" />
                      </div>
                    </div>
                    <div className="flex flex-col p-[16px] gap-[24px] flex-1 bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <div className="flex flex-col gap-[12px] w-full">
                        <div className="flex flex-row items-center p-[12px] gap-[4px] w-full bg-[#f9f9f9] rounded-[12px]">
                          <div className="flex flex-col gap-[4px] flex-1">
                            <div className="flex flex-row items-center gap-[8px] w-full" />
                            <span className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">Policy No: PNF320104124A23</span>
                          </div>
                          <ChevronRight className="w-[16px] h-[16px] text-[#212121]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Home Card */}
                  <div className="flex flex-col overflow-hidden max-h-[260px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col p-[16px] gap-[24px] w-full bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-black">
                      <div className="flex flex-row items-center gap-[8px] w-full">
                        <div className="flex flex-row items-center gap-[8px] flex-1">
                          <Home className="w-[24px] h-[24px] text-[#212121]" />
                          <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-center text-[#212121]">Home</span>
                        </div>
                        <ShieldCheck className="w-[70px] h-[25px] text-[#005eb8]" />
                      </div>
                    </div>
                    <div className="flex flex-col p-[16px] gap-[24px] flex-1 bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <div className="flex flex-col gap-[12px] w-full">
                        <div className="flex flex-row items-center p-[12px] gap-[4px] w-full bg-[#f9f9f9] rounded-[12px]">
                          <div className="flex flex-col gap-[4px] flex-1">
                            <div className="flex flex-row items-center gap-[8px] w-full" />
                            <span className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">Policy No: PNF320104124A23</span>
                          </div>
                          <ChevronRight className="w-[16px] h-[16px] text-[#212121]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hospitalisation Protection Card */}
                  <div className="flex flex-col overflow-hidden max-h-[260px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col p-[16px] gap-[24px] w-full bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-black">
                      <div className="flex flex-row items-center gap-[8px] w-full">
                        <div className="flex flex-row items-center gap-[8px] flex-1">
                          <div className="flex flex-row justify-center items-center gap-[10px] w-[24px] h-[24px]" />
                          <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-center text-[#212121]">Hospitalisation Protection</span>
                        </div>
                        <div className="flex flex-row justify-center items-center p-[4px] gap-[4px] bg-[#f5f5f5] rounded-[24px]">
                          <span className="font-[Noto_Sans] text-[12px] font-medium leading-[16.8px] text-center text-[#8d8d8d]">NOT COVERED</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[16px] gap-[24px] flex-1 bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <div className="flex flex-col gap-[12px] w-full">
                        <span className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#212121]">Cover day-to-day expenses when hospitalised from $X/year. Get quote here.</span>
                      </div>
                    </div>
                  </div>

                  {/* Personal Accident Card */}
                  <div className="flex flex-col overflow-hidden max-h-[260px] shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col p-[16px] gap-[24px] w-full bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-black">
                      <div className="flex flex-row items-center gap-[8px] w-full">
                        <div className="flex flex-row items-center gap-[8px] flex-1">
                          <User className="w-[24px] h-[24px] text-[#212121]" />
                          <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-center text-[#212121]">Personal Accident</span>
                        </div>
                        <div className="flex flex-row justify-center items-center p-[4px] gap-[4px] bg-[#f5f5f5] rounded-[24px]">
                          <span className="font-[Noto_Sans] text-[12px] font-medium leading-[16.8px] text-center text-[#8d8d8d]">NOT COVERED</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[16px] gap-[24px] flex-1 bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <div className="flex flex-col gap-[12px] w-full">
                        <span className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#212121]">Get medical coverage for accidents from $X/year with your pre-filled details. Get quote here.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rewards Section */}
              <div className="flex flex-col gap-[20px] w-full">
                <div className="flex flex-row items-center gap-[28px] w-full">
                  <h2 className="font-[Noto_Sans] text-[20px] font-bold leading-[24px] text-[#212121]">Rewards</h2>
                  <div className="flex flex-row items-center gap-[12px] cursor-pointer">
                    <span className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#0d6efd]">View All</span>
                    <ArrowRight className="w-[16px] h-[16px] text-[#0d6efd]" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[20px] w-full overflow-hidden">
                  <div className="w-full md:w-[313px] flex flex-col shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="w-full h-[176px] bg-gradient-to-br from-[#005eb8] to-[#5c55eb] rounded-tl-[8px] rounded-tr-[8px]" />
                    <div className="flex flex-col p-[16px] gap-[24px] bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <div className="flex flex-col gap-[12px]">
                        <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-[#212121]">10% off KITH by Casa Products</span>
                        <span className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">Enter promo code UOIKITH10 at checkout on www.kith.sg to enjoy the offer.</span>
                      </div>
                      <button className="flex items-center justify-center py-[12px] px-[16px] bg-[#005eb8] rounded-[8px]">
                        <span className="font-[Noto_Sans] text-[16px] font-medium text-white">Shop Now</span>
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-[313px] flex flex-col shadow-[0px_1px_4px_rgba(0,0,0,0.05)]">
                    <div className="w-full h-[176px] bg-gradient-to-br from-[#5c55eb] to-[#005eb8] rounded-tl-[8px] rounded-tr-[8px]" />
                    <div className="flex flex-col p-[16px] gap-[24px] bg-white rounded-bl-[8px] rounded-br-[8px]">
                      <div className="flex flex-col gap-[12px]">
                        <span className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-[#212121]">10% off Cat & the Fiddle Cakes</span>
                        <span className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">Enter promo code UOICATFIDDLE10 at checkout.</span>
                      </div>
                      <button className="flex items-center justify-center py-[12px] px-[16px] bg-[#005eb8] rounded-[8px]">
                        <span className="font-[Noto_Sans] text-[16px] font-medium text-white">Shop Now</span>
                      </button>
                    </div>
                  </div>
                  <ChevronRight className="w-[40px] h-[40px] self-center cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="fixed top-[56px] right-0 w-full md:w-[400px] h-full bg-white shadow-[-4px_0px_16px_rgba(0,0,0,0.1)] z-50 flex flex-col">
          <div className="flex flex-row justify-between items-center p-[16px] border-b border-black">
            <h2 className="font-[Noto_Sans] text-[20px] font-bold leading-[24px] text-[#212121]">Notifications</h2>
            <button onClick={() => setShowNotifications(false)}>
              <X className="w-[24px] h-[24px] text-[#212121]" />
            </button>
          </div>
          <div className="flex flex-col gap-[0px] overflow-auto flex-1">
            {/* Notification Item 1 */}
            <div className="flex flex-col p-[16px] gap-[8px] border-b border-[#f5f5f5] bg-[#f0f7ff]">
              <div className="flex flex-row justify-between items-start gap-[8px]">
                <p className="font-[Noto_Sans] text-[14px] font-medium leading-[21px] text-[#212121]">Policy Renewal Reminder</p>
                <span className="font-[Noto_Sans] text-[12px] leading-[18px] text-[#8d8d8d] whitespace-nowrap">2 days ago</span>
              </div>
              <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">Your Travel policy PNF320104124A23 is due for renewal in 30 days. Renew now to avoid a lapse in coverage.</p>
            </div>
            {/* Notification Item 2 */}
            <div className="flex flex-col p-[16px] gap-[8px] border-b border-[#f5f5f5]">
              <div className="flex flex-row justify-between items-start gap-[8px]">
                <p className="font-[Noto_Sans] text-[14px] font-medium leading-[21px] text-[#212121]">Claim Update</p>
                <span className="font-[Noto_Sans] text-[12px] leading-[18px] text-[#8d8d8d] whitespace-nowrap">5 days ago</span>
              </div>
              <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">Your claim CLM-2024-00123 has been approved. The payout will be processed within 3-5 business days.</p>
            </div>
            {/* Notification Item 3 */}
            <div className="flex flex-col p-[16px] gap-[8px] border-b border-[#f5f5f5]">
              <div className="flex flex-row justify-between items-start gap-[8px]">
                <p className="font-[Noto_Sans] text-[14px] font-medium leading-[21px] text-[#212121]">New Reward Available</p>
                <span className="font-[Noto_Sans] text-[12px] leading-[18px] text-[#8d8d8d] whitespace-nowrap">1 week ago</span>
              </div>
              <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#6e6e6e]">A new reward is available for you. Enjoy 10% off KITH by Casa Products with code UOIKITH10.</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="w-full h-[53px] flex items-center justify-between py-[16px] px-[24px] bg-[#005eb8]">
        <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-white">Copyright © 2026 United Overseas Insurance Limited Co. Reg. No. 197100152R.</p>
        <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-right text-white">All Rights Reserved.</p>
      </div>
    </div>
  )
}
