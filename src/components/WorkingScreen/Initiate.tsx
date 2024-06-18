import { BiChevronRight } from "react-icons/bi"

import house from "../WorkingScreen/house.png"

const Initiate = ({ setShowWorkingScreen }) => {
  const handleClose = () => {
    setShowWorkingScreen(false)
  }
  return (
    <div className="fixed top-0 right-0 w-[751px] h-[905px]">
      <div className="w-full h-full bg-white border-l border-gray-200 shadow-md">
        <div className="flex flex-col items-center gap-9 absolute w-[349px] h-[410px] left-[201px] top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center w-[349px] h-[259px]">
            <div className="w-[290px] h-[217px] bg-cover">
              {/* IMG png is in root/assets/house.png */}
              <img src={house} alt="house" />
            </div>
            <button className="flex justify-center items-center px-6 py-3 gap-1.5 w-[349px] h-[42px] bg-blue-700 rounded-full">
              <span className="text-white text-lg font-bold">
                No Searches Identified
              </span>
            </button>
          </div>
          <div className="flex flex-col items-start gap-5 w-[249px] h-[113px]">
            <div className="text-black text-center text-lg font-medium">
              (1) Search a city on Zillow
            </div>
            <div className="text-black text-center text-lg font-medium">
              (2) Click on the BlueFin Tab
            </div>
            <div className="text-black text-center text-lg font-medium">
              (3) Find The Best Deals 🎉
            </div>
          </div>
        </div>
        <div
          onClick={handleClose}
          className="flex items-center gap-3.5 absolute w-[145px] h-[40px] right-6 top-7 cursor-pointer">
          <div className="text-black text-center text-lg font-medium">
            Close Tab
          </div>
          <div className="text-[40px] bg-slate-100 rounded-full p-1.5">
            <span className="text-[24px]">
              <BiChevronRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Initiate
