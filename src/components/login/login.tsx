import React from "react"
import { FcGoogle } from "react-icons/fc"

export default function BlueFinnLogin({ onLogin }) {
  return (
    <>
      <div className="flex font-poppins items-center justify-center flex-col h-screen">
        <div className="space-y-8">
          {/* BlueFinn's Logo */}
          <div className="flex justify-center">
            <svg
              width="46"
              height="26"
              viewBox="0 0 46 26"
              className="mt-3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.0548 0.5C19.0259 0.5 12.8876 4.77891 9.47119 8.43984L2.64854 3.27969C1.70088 2.5625 0.286035 3.32656 0.528223 4.425L2.41729 13L0.527442 21.5758C0.285254 22.6742 1.7001 23.4375 2.64775 22.7211L9.47041 17.5609C12.8868 21.2211 19.0259 25.5 26.0548 25.5C36.7938 25.5 45.5001 15.5 45.5001 13C45.5001 10.5 36.7938 0.5 26.0548 0.5ZM32.8853 14.875C31.8501 14.875 31.0103 14.0352 31.0103 13C31.0103 11.9641 31.8501 11.125 32.8853 11.125C33.9212 11.125 34.7603 11.9641 34.7603 13C34.7603 14.0352 33.9204 14.875 32.8853 14.875Z"
                fill="#1849A9"
              />
            </svg>

            <div className="font-bold text-[32px] text-black ml-3">Bluefin</div>
          </div>
          {/* Continue with google */}

          <div className="space-y-4 w-full">
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                onLogin()
              }}
              type="button"
              className="hover:bg-[#add4fa] w-full bg-[#D1E9FF] transition-all rounded-full">
              <div className="flex items-center justify-center gap-[10px] py-3">
                <FcGoogle className="text-xl" />
                <p className="text-sm font-semibold text-[#272727]">
                  Continue With Google
                </p>
              </div>
            </button>
            <div className=" w-full flex items-center justify-center font-semibold ">
              <p className="text-[#707070] w-[472px] text-center  text-xs">
                By clicking "Continue with Google", you acknowledge that you
                have read and understood, and agree to BlueFin’s{" "}
                <span className="text-[#1849A9]">Terms & Conditions</span> and{" "}
                <span className="text-[#1849A9]"> Privacy Policy.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
