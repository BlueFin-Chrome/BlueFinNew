import React from "react"
import { BiChevronRight } from "react-icons/bi"

const CloseButton = ({ setShowWorkingScreen }) => {
  const handleClose = () => {
    setShowWorkingScreen(false)
  }
  return (
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
  )
}

export default CloseButton
