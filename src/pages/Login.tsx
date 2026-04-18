import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    if (username.trim() && password.trim()) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative">
      {/* Form Side */}
      <div className="w-full md:flex-1 flex flex-col justify-center items-center bg-white bg-gradient-to-b from-[#005eb8]/7 to-[#5c55eb]/7 p-[16px] md:p-[32px]">
        <div className="w-full max-w-[420px] mx-auto flex flex-col items-center py-[32px] px-[24px] gap-[32px] bg-white/70 bg-[radial-gradient(circle,_rgba(255,255,255,0.56)_0%,_rgba(255,255,255,0.08)_100%)] rounded-[24px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
          {/* Header */}
          <div className="w-full flex flex-col items-center gap-[12px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/26ec/3ab4/0588c7482da725dcdeb68b2897f9bde2?Expires=1777248000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PSA09KnD8BDeEeZZ6cI~VtwcDg22Moj9P1AO5xeTXiY2OJx-KvohRLWP4pKNn82Yr9ydUl6NcjVgbc1hOwTD-Rywd-d1OnxemrSTgf0-pXlYz2parVqr49Sw1Gd3dnsRg-BLI3dWeI-TMa4dM1GVL74lZlH3ygrKx6Pyviq5vT9DPYqXEAmP0yu0I2USnzJAuFiD3vJXUmm2IbHEPc~ku69IKXveWcnCROgUSCdGQACnO4zfr-rq1g5~bkr-vOTF8SXKiVIeC8AwGjYJngONCgc41BfkoJhM1VotERpKTJfol4vxIaO~zccPFywRiKydECQS7nU0gULQlDtMU-VHFw__"
              className="w-[100px] h-[50px]"
              alt="UOI Logo"
            />
            <h1 className="text-[32px] font-bold leading-[38.4px] text-center text-[#212121] font-[Noto_Sans]">Log In</h1>
            <p className="text-[16px] leading-[24px] text-center text-[#212121] font-[Noto_Sans]">
              Welcome back! Please enter your credentials to continue.
            </p>
          </div>

          {/* Form */}
          <div className="w-full flex flex-col gap-[16px]">
            {/* Username */}
            <div className="w-full flex flex-col gap-[12px]">
              <div className="flex items-center gap-[8px] h-[21px]">
                <p className="text-[14px] leading-[21px] text-[#212121] font-[Noto_Sans]">Username</p>
              </div>
              <div className="w-full flex items-center py-[12px] px-[16px] gap-[8px] bg-white rounded-[8px] border border-[#000000]">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full bg-transparent outline-none text-[16px] leading-[24px] text-[#212121] font-[Noto_Sans] placeholder-[#8d8d8d]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="w-full flex flex-col gap-[12px]">
              <div className="flex items-center gap-[8px] h-[21px]">
                <p className="text-[14px] leading-[21px] text-[#212121] font-[Noto_Sans]">Password</p>
              </div>
              <div className="w-full flex items-center py-[12px] px-[16px] gap-[8px] bg-white rounded-[8px] border border-[#000000]">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-transparent outline-none text-[16px] leading-[24px] text-[#212121] font-[Noto_Sans] placeholder-[#8d8d8d]"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!username.trim() || !password.trim()}
            className="w-full flex items-center justify-center py-[14px] px-[40px] gap-[10px] bg-[#005eb8] rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <p className="text-[16px] font-medium leading-[24px] text-white font-[Noto_Sans]">Submit</p>
          </button>
        </div>

        {/* Footer Text */}
        <div className="w-full max-w-[420px] mx-auto flex flex-col gap-[12px] px-[24px] mt-[24px]">
          <p className="text-[14px] leading-[21px] text-center text-[#6e6e6e] font-[Noto_Sans]">
            Don't have an account?{' '}
            <span
              className="text-[#0d6efd] cursor-pointer hover:underline"
              onClick={() => navigate('/create-account-with-nric-1-1')}
            >
              Create Account
            </span>
          </p>
          <p className="text-[14px] leading-[21px] text-center text-[#6e6e6e] font-[Noto_Sans]">
            If you're experiencing login issues, please contact us at{' '}
            <span className="text-[#0d6efd]">help@uoi.com.sg</span>.
          </p>
        </div>
      </div>

      {/* Image Side */}
      <div className="hidden md:block md:flex-1">
        <img
          src="https://s3-alpha-sig.figma.com/img/b174/518e/b937b0d57f4c2d0945d9af6744ea37cb?Expires=1777248000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UyaLqNl7Wjr20aSZe5n6rCoLqShVIdKJr~u2oUE8Czbg1mr9H55m-vMWkgHD8WWAsiPtbWgdkhkEVYzmnD6IzmmR4V8CwpsI9vLiERjKtd2-R8ptwU8XIiPR4f5yUkMNk6m~FiYM64BTzCQ3snLocgWRglWTs6DS8Mn1n~9c07XUNCAUGQZQ7eRA5A89BmHCBaaxPiN7Z8QVt4UoSH7ZqdvF8dqiupRBP4~NoY0sY3TuA5puiCBL7VBYs9Ede~OOH9rJEUm6VUkr2mBhKN7XJ1jlehJHn3McGWRQlFls~yHIQuCW44OYjLXmCg~gand4K4vjkZ3PA0Nh5Z~yPUXzHA__"
          className="w-full h-full object-cover"
          alt="Travel"
        />
      </div>

      {/* Footer */}
      <div className="w-full h-[53px] flex items-center justify-between py-[16px] px-[24px] bg-[#005eb8]">
        <p className="text-[14px] leading-[21px] text-white font-[Noto_Sans]">
          Copyright © 2026 United Overseas Insurance Limited Co. Reg. No. 197100152R.
        </p>
        <p className="text-[14px] leading-[21px] text-right text-white font-[Noto_Sans]">All Rights Reserved.</p>
      </div>
    </div>
  )
}
