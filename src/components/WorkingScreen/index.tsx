import React from "react"

import FinalScreen from "./finalScreen"
import Initiate from "./Initiate"
import LoadingScreen from "./loadingScreen"

const WorkingScreen = ({
  setShowWorkingScreen,
  isHomes,
  showFinalScreen,
  finalFilteredArticles
}) => {
  return (
    <div className="overflow-auto">
      {/* {isHomes ? (
        <>
          {!showFinalScreen ? (
            <LoadingScreen setShowWorkingScreen={setShowWorkingScreen} />
          ) : (
            <FinalScreen
              setShowWorkingScreen={setShowWorkingScreen}
              finalFilteredArticles={finalFilteredArticles}
            />
            )}
            </>
            ) : (
              <Initiate setShowWorkingScreen={setShowWorkingScreen} />
              )} */}
      <FinalScreen
        setShowWorkingScreen={setShowWorkingScreen}
        finalFilteredArticles={finalFilteredArticles}
      />
    </div>
  )
}

export default WorkingScreen
