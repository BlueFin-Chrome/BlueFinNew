import React from "react"

import "../style.css"

import BlueFinnLogin from "~components/login/login"
import MonthlyPricing from "~components/pricing"
import Pricing from "~components/pricing"
import TutorialSection from "~components/tutorial/tutorial"

function Index() {
  return (
    <div className="font-poppins">
      {/* <BlueFinnLogin onLogin={false} /> */}
      {/* <TutorialSection /> */}
      <Pricing />
    </div>
  )
}

export default Index
