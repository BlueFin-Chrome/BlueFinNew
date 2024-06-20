import { BiSolidFileExport } from "react-icons/bi"

import CloseButton from "~components/CloseBtn"

const FinalScreen = ({ setShowWorkingScreen }) => {
  return (
    <div className="fixed top-0 right-0 w-[751px] h-[905px]">
      <div className="w-full h-full bg-white border-l border-gray-200 shadow-md">
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
        <div className="w-[691px] h-[188px] rounded-2xl border border-[#E9E9E9] relative left-[30px] top-7"></div>
      </div>
    </div>
  )
}

export default FinalScreen
