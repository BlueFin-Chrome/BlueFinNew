import React from "react"

import Initiate from "./Initiate"
import LoadingScreen from "./loadingScreen"

const WorkingScreen = ({ setShowWorkingScreen }) => {
  return (
    <div>
      {/* <Initiate setShowWorkingScreen={setShowWorkingScreen} /> */}
      <LoadingScreen setShowWorkingScreen={setShowWorkingScreen} />
    </div>
  )
}

export default WorkingScreen
