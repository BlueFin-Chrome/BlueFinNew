// ZillowDealFinder.jsx
import React from "react"

const PricingSection = ({
  Price,
  isMonthly,
  handleYearly,
  handleMonthly,
  handleChange
}) => {
  return (
    <div className="flex flex-col items-center w-[421px] h-[394px] bg-[#D1E9FF] rounded-[14px] mx-auto my-10">
      <div className="flex flex-col items-center w-[409px] h-[382px] bg-white border border-gray-700 rounded-[14px] mt-2">
        <div className="text-center mt-8 mb-4">
          <h1 className="font-medium text-2xl text-black">
            🔍 Zillow Deal Finder
          </h1>
        </div>
        <div className="flex flex-col items-start px-9">
          <p className="font-medium text-lg text-black">
            Save hours of searching for homes with equity vs overpriced options.
            Let BlueFin do the work for you. 🐟
          </p>
        </div>
        <div className="flex flex-col items-start px-9 mt-6">
          <div className="flex items-center justify-between w-full">
            <span className="font-bold text-4xl text-[#175CD3]">${Price}</span>
            <div className="flex items-center bg-[#FAFAFA] border border-gray-300 rounded-[23px] px-0.5 py-0.5">
              <button
                type="button"
                onClick={handleMonthly}
                className={`flex items-center justify-center ${isMonthly ? "bg-[#D1E9FF] py-1" : "bg-white"} rounded-[23px] px-4 py-2`}>
                <span
                  className={`${isMonthly ? "font-semibold text-black" : "font-medium text-gray-500"} text-xs`}>
                  6 Months
                </span>
              </button>
              <button
                type="button"
                onClick={handleYearly}
                className={`flex items-center justify-center ${!isMonthly ? "bg-[#D1E9FF]" : "bg-white"} rounded-[23px] px-4 py-2`}>
                <span
                  className={`${!isMonthly ? "font-semibold text-black" : "font-medium text-gray-500"} text-xs`}>
                  Yearly{" "}
                  <span className="text-[#175CD3] font-semibold">(14%)</span>
                </span>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-medium text-lg text-black">
              {isMonthly ? (
                <> Ideal for Short-Term Home Searches </>
              ) : (
                <>
                  {" "}
                  <span className="text-[#175CD3] font-semibold">
                    Best Value:
                  </span>{" "}
                  Continuous Access to the Best Deals{" "}
                </>
              )}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-6">
          <button
            onClick={handleChange}
            className="flex justify-center items-center w-[349px] h-[42px] bg-[#175CD3] rounded-[24px]">
            <span className="font-bold text-sm text-white">Choose Plan</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricingSection
