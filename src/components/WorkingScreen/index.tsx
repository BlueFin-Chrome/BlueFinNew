import React from "react"

import Initiate from "./Initiate"

const WorkingScreen = ({ setShowWorkingScreen }) => {
  return (
    <div>
      <Initiate setShowWorkingScreen={setShowWorkingScreen} />
    </div>
  )
}

export default WorkingScreen
