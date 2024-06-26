import { useState } from "react"
import { BiSolidFileExport } from "react-icons/bi"

import CloseButton from "~components/CloseBtn"
import { parsePropertyElements } from "~utils/helper"

import PropertyList from "./PropertyCard"

const FinalScreen = ({ setShowWorkingScreen, finalFilteredArticles }) => {
  let f = []
  const [finalHouses, setFinalHouses] = useState([])
  const finalHousesFromFunc = parsePropertyElements(finalFilteredArticles)
  if (finalHousesFromFunc.length > 0) {
    f = finalHousesFromFunc
    // setFinalHouses(finalHousesFromFunc)
  }
  console.log(finalHouses, "finalHouses")
  console.log(f, "f")
  return (
    <div className="fixed top-0 right-0 w-[751px] h-auto overflow-auto ">
      <div className="w-full  bg-white border-l border-gray-200 shadow-md h-auto">
        <div>
          <div className="flex relative top-[30px] px-6 font-bold">
            <h1 className=" text-[24px]">BlueFin Deals Found:</h1>
            <span className="w-[30px] h-[30px] bg-[#3670EE] rounded-full text-center text-white p-0.5 relative left-2 top-1">
              32
            </span>
          </div>
          <div className="flex border border-[#DBDBDB] rounded-3xl px-3 py-2 justify-center space-x-2 text-center w-[106px] h-[30px] relative left-[452px] cursor-pointer">
            <span className="relative bottom-1.5 text-[22px]">
              <BiSolidFileExport />
            </span>
            <span className="font-bold text-[14px] relative bottom-1.5">
              Export
            </span>
          </div>
          <CloseButton setShowWorkingScreen={setShowWorkingScreen} />
        </div>
        {/* Zestimate Based Equity */}
        <div className="w-[691px] h-[158px] rounded-2xl border border-[#E9E9E9] relative left-[30px] top-7"></div>
        {/* Filtered Results */}
        <div className="p-3 overflow-auto h-[550px] mt-6 relative left-5">
          <PropertyList finalFilteredArticles={f} />
        </div>
        <div className="h-80 w-full"></div>
      </div>
    </div>
  )
}

export default FinalScreen
