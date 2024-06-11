import React from "react"

import PricingSection from "./Pricing"

export default function Pricing() {
  const [Price, setPrice] = React.useState(495)
  const [isMonthly, setIsMonthly] = React.useState(true)

  const handleYearly = () => {
    setPrice(850)
    setIsMonthly(false)
  }
  const handleMonthly = () => {
    setPrice(495)
    setIsMonthly(true)
  }
  return (
    <>
      <div className="flex font-poppins items-center justify-center flex-col h-screen">
        <div className="">
          {/* Heading */}

          <div className="w-full text-center font-bold text-[40px]">
            Stop Searching, Start Finding
          </div>
          {/* Video Section */}
          <div className="flex justify-center">
            <PricingSection
              Price={Price}
              isMonthly={isMonthly}
              handleYearly={handleYearly}
              handleMonthly={handleMonthly}
            />
          </div>
          {/* Get Started Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                window.open("https://www.youtube.com/", "_blank")
              }}
              className=" font-semibold text-black text-[20px] relative bottom-4">
              I prefer to find deals the hard way, one by one.
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
