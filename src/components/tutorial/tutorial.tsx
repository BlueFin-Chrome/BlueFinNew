import React from "react"

export default function TutorialSection({ setIsTutorialPage }) {
  const handleGetStarted = () => {
    setIsTutorialPage(false)
    window.open("https://www.youtube.com/", "_blank")
  }
  return (
    <>
      <div className="flex font-poppins items-center justify-center flex-col h-screen">
        <div className="space-y-5">
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
          {/* Heading */}

          <div className="space-y-2 w-full text-center font-bold text-[40px]">
            How It Works
          </div>
          {/* Video Section */}
          <div className="w-[776px] h-[373px] bg-[#E0E0E0]"></div>
          {/* Get Started Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleGetStarted}
              className="hover:bg-[#2d4165] bg-[#175CD3] transition-all rounded-full font-semibold text-white px-24 py-2">
              Let's Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
