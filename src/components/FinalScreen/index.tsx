import React from "react"

import HouseIcon from "~assets/house"

export default function FinalScreen() {
  return (
    <>
      <div className="flex font-poppins items-center justify-center flex-col h-screen">
        <div className="space-y-8">
          {/* Heading */}

          <div className="w-full text-center font-bold text-[40px]">
            Successfully Installed 🎉
          </div>

          <div className="flex justify-center ">
            <button
              onClick={() => {
                window.open("https://www.zillow.com/", "_blank")
              }}
              className="flex justify-center space-x-2 items-center w-[277px] h-[54px] bg-[#175CD3] rounded-[32px] px-[18px] py-[12px]">
              <span className="font-semibold text-[19px] text-white">
                {" "}
                Find The Best Deals
              </span>
              <HouseIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
