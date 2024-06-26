import React from "react"

function Loader() {
  return (
    <div className="flex bg-[#ffffff] items-center h-screen justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  )
}

export default Loader
