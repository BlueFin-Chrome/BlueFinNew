import loadingHouse from "assets/loadingHouse.png"
import React from "react"
import { BiChevronRight } from "react-icons/bi"

import CloseButton from "~components/CloseBtn"

const LoadingScreen = ({ setShowWorkingScreen }) => {
  return (
    <div className="fixed top-0 right-0 w-[751px] h-[905px]">
      <div className="w-full h-full bg-white border-l border-gray-200 shadow-md">
        <div className="flex flex-col items-center gap-9 absolute w-[349px] h-[410px] left-[201px] top-[35%] transform -translate-y-1/2">
          <div className="flex flex-col items-center w-[349px] h-[259px]">
            <div className="w-[490px] h-[367px] bg-cover">
              {/* IMG png is in root/assets/house.png */}
              <img src={loadingHouse} alt="house" />
            </div>
          </div>
          <div className="text-black text-center text-[17px] font-extrabold">
            One Moment - We're Crunching The Data
          </div>
        </div>
        <CloseButton setShowWorkingScreen={setShowWorkingScreen} />
      </div>
    </div>
  )
}

export default LoadingScreen
