import React from "react"

import PricingSection from "./Pricing"

export default function Pricing() {
  return (
    <>
      <div className="flex font-poppins items-center justify-center flex-col h-screen">
        <div className="space-y-1">
          {/* Heading */}

          <div className="space-y-1 w-full text-center font-bold text-[40px]">
            Stop Searching, Start Finding
          </div>
          {/* Video Section */}
          <div className="flex justify-center">
            <PricingSection />
          </div>
          {/* Get Started Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                window.open("https://www.youtube.com/", "_blank")
              }}
              className=" font-semibold text-black text-[20px]">
              I prefer to find deals the hard way, one by one.
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
