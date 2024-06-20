import React from "react"

import FinalScreen from "./finalScreen"
import Initiate from "./Initiate"
import LoadingScreen from "./loadingScreen"

const WorkingScreen = ({ setShowWorkingScreen }) => {
  return (
    <div>
      {/* <Initiate setShowWorkingScreen={setShowWorkingScreen} /> */}
      {/* <LoadingScreen setShowWorkingScreen={setShowWorkingScreen} /> */}
      <FinalScreen setShowWorkingScreen={setShowWorkingScreen} />
    </div>
  )
}

export default WorkingScreen
