import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OnboardingWelcomeMessage() {
  const navigate = useNavigate()
  const [showWelcome, setShowWelcome] = useState(true)
  
  const handleGetStarted = () => {
    setShowWelcome(false)
    navigate('/dashboard')
  }
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white bg-gradient-to-b from-[#005eb8]/7 to-[#5c55eb]/7 p-[16px]">
      {showWelcome && (
        <div className="w-full max-w-[560px] bg-white rounded-[12px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] p-[32px] relative">
          <div className="flex flex-col items-center gap-[32px]">
            {/* Welcome Icon */}
            <div className="w-[120px] h-[120px] flex items-center justify-center bg-gradient-to-br from-[#005eb8] to-[#5c55eb] rounded-full">
              <div className="text-[48px]">🎉</div>
            </div>
            
            {/* Welcome Text */}
            <div className="flex flex-col gap-[12px] text-center">
              <h1 className="text-[24px] md:text-[32px] font-bold leading-[28.8px] md:leading-[38.4px] text-[#000000] font-[Noto_Sans]">Welcome to UOI!</h1>
              <p className="text-[16px] leading-[24px] text-[#000000] font-[Noto_Sans]">Your account has been successfully created. You can now access all your insurance policies and manage your coverage in one convenient portal.</p>
            </div>
            
            {/* Get Started Button */}
            <button
              onClick={handleGetStarted}
              className="flex items-center justify-center py-[14px] px-[40px] gap-[10px] bg-[#005eb8] rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity"
            >
              <p className="text-[16px] font-medium leading-[24px] text-white font-[Noto_Sans]">Get Started</p>
            </button>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 w-full h-[53px] flex items-center justify-between py-[16px] px-[24px] bg-[#005eb8]">
        <p className="text-[14px] leading-[21px] text-white font-[Noto_Sans]">Copyright © 2026 United Overseas Insurance Limited Co. Reg. No. 197100152R.</p>
        <p className="text-[14px] leading-[21px] text-right text-white font-[Noto_Sans]">All Rights Reserved.</p>
      </div>
    </div>
  )
}
