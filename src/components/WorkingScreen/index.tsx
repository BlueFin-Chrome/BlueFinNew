import React from "react"

import FinalScreen from "./finalScreen"
import Initiate from "./Initiate"
import LoadingScreen from "./loadingScreen"

const WorkingScreen = ({ setShowWorkingScreen, isHomes }) => {
  return (
    <div>
      {isHomes ? (
        <>
          <LoadingScreen setShowWorkingScreen={setShowWorkingScreen} />
          {/* <FinalScreen setShowWorkingScreen={setShowWorkingScreen} /> */}
        </>
      ) : (
        <Initiate setShowWorkingScreen={setShowWorkingScreen} />
      )}
    </div>
  )
}

export default WorkingScreen
