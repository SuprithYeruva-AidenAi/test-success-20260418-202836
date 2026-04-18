import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUpViaSingpassCreatePassword() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const handleSubmit = () => {
    if (password && confirmPassword && password === confirmPassword) {
      navigate('/dashboard')
    }
  }
  
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Form Side */}
      <div className="w-full md:flex-1 flex flex-col justify-center items-center bg-white bg-gradient-to-b from-[#005eb8]/7 to-[#5c55eb]/7 p-[16px] md:p-[32px]">
        <div className="w-full max-w-[420px] mx-auto flex flex-col items-center py-[32px] px-[24px] gap-[32px] bg-white/70 bg-[radial-gradient(circle,_rgba(255,255,255,0.56)_0%,_rgba(255,255,255,0.08)_100%)] rounded-[24px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
          {/* Header */}
          <div className="w-full flex flex-col items-center gap-[12px]">
            <div className="w-[100px] h-[50px] bg-gray-200 rounded" />
            <h1 className="text-[24px] md:text-[32px] font-bold leading-[28.8px] md:leading-[38.4px] text-center text-[#212121] font-[Noto_Sans]">Create Password</h1>
            <p className="text-[16px] leading-[24px] text-center text-[#212121] font-[Noto_Sans]">Create a secure password for your UOI account.</p>
          </div>
          
          {/* Form */}
          <div className="w-full flex flex-col gap-[16px]">
            {/* Password */}
            <div className="w-full flex flex-col gap-[4px]">
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[8px] h-[21px]">
                  <p className="text-[14px] leading-[21px] text-[#212121] font-[Noto_Sans]">Password</p>
                </div>
                <div className="w-full flex items-center py-[12px] px-[16px] gap-[8px] bg-white rounded-[8px] border border-[#000000]">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-[16px] leading-[24px] text-[#212121] font-[Noto_Sans]"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#6e6e6e] hover:text-[#212121]"
                  >
                    {showPassword ? '👁️' : '👁️\u200d🗨️'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Confirm Password */}
            <div className="w-full flex flex-col gap-[4px]">
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[8px] h-[21px]">
                  <p className="text-[14px] leading-[21px] text-[#212121] font-[Noto_Sans]">Confirm Password</p>
                </div>
                <div className="w-full flex items-center py-[12px] px-[16px] gap-[8px] bg-white rounded-[8px] border border-[#000000]">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-[16px] leading-[24px] text-[#212121] font-[Noto_Sans]"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-[#6e6e6e] hover:text-[#212121]"
                  >
                    {showConfirmPassword ? '👁️' : '👁️\u200d🗨️'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!password || !confirmPassword || password !== confirmPassword}
            className="w-full flex items-center justify-center py-[14px] px-[40px] gap-[10px] bg-[#005eb8] rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <p className="text-[16px] font-medium leading-[24px] text-white font-[Noto_Sans]">Create Account</p>
          </button>
        </div>
        
        {/* Footer Text */}
        <div className="w-full max-w-[420px] mx-auto flex flex-col gap-[12px] px-[24px] mt-[24px]">
          <p className="text-[14px] leading-[21px] text-center text-[#6e6e6e] font-[Noto_Sans]">Already have an account? <span className="text-[#0d6efd] cursor-pointer hover:underline" onClick={() => navigate('/')}>Log in</span></p>
        </div>
      </div>
      
      {/* Image Side */}
      <div className="hidden md:block md:flex-1 bg-gradient-to-br from-[#005eb8] to-[#5c55eb]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-[32px] font-bold mb-[16px] font-[Noto_Sans]">Welcome to UOI</h2>
            <p className="text-[18px] font-[Noto_Sans]">Your trusted insurance partner</p>
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
