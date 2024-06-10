import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import BlueFinnLogo from "~assets/logo"

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
export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.querySelector(".search-page-action-bar"),
  insertPosition: "afterend"
})
const handleFilter = () => {
  getZestimate()
}

const PlasmoOverlay = () => {
  return (
    <div onClick={handleFilter}>
      <BlueFinnLogo />
    </div>
  )
}

export default PlasmoOverlay
