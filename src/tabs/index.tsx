import React from "react"

import "../style.css"

import FinalScreen from "~components/FinalScreen"
import Loader from "~components/login/Loader"
import BlueFinnLogin from "~components/login/login"
import MonthlyPricing from "~components/pricing"
import Pricing from "~components/pricing"
import TutorialSection from "~components/tutorial/tutorial"
import { useFirebase } from "~firebase/hook"

function Index() {
  const { user, isLoading, onLogin, onLogout } = useFirebase()
  const [testLoading, setTestLoading] = React.useState(true)

  setTimeout(() => {
    setTestLoading(false)
  }, 700)

  return (
    <div className="font-poppins">
      {isLoading ? (
        <Loader />
      ) : !user ? (
        testLoading ? (
          <Loader />
        ) : (
          <BlueFinnLogin onLogin={onLogin} />
        )
      ) : testLoading ? (
        <Loader />
      ) : (
        <FinalScreen onLogout={onLogout} />
      )}
    </div>
  )
}

export default Index
