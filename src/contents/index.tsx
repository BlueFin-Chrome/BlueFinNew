import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import { useState } from "react"

import BlueFinnLogo from "~assets/logo"
import WorkingScreen from "~components/WorkingScreen"
import Initiate from "~components/WorkingScreen/Initiate"

import getZestimate from "./getZest"

export const config: PlasmoCSConfig = {
  matches: ["https://www.zillow.com/*"],
  css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}
// export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
//   element: document.querySelector(".search-page-action-bar"),
//   insertPosition: "afterend"
// })

const PlasmoOverlay = () => {
  const [showWorkingScreen, setShowWorkingScreen] = useState(false)
  const handleFilter = () => {
    // getZestimate()
    setShowWorkingScreen(true)
  }

  return (
    <>
      {showWorkingScreen ? (
        <div>
          <WorkingScreen setShowWorkingScreen={setShowWorkingScreen} />
        </div>
      ) : (
        <div
          className="flex justify-end w-screen relative top-[120px] cursor-pointer"
          onClick={handleFilter}>
          <div className="flex text-[16px] relative right-[18px] border border-[#D1D1D1] hover:bg-[#194185] bg-white  hover:text-white text-black  font-semibold w-[190px] h-[35px] rounded-lg py-1 px-5">
            <div className="flex justify-between space-x-2">
              <BlueFinnLogo className="relative bottom-0.5 " />
              <h1>Filter for Deals</h1>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PlasmoOverlay
