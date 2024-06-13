import React from "react"
import { IoMdLogOut } from "react-icons/io"

export default function LogoutBtn({ onLogout }) {
  return (
    <>
      <div className="fixed right-4 top-4">
        <abbr title="Logout">
          <button
            onClick={() => {
              onLogout()
            }}
            className=" rounded-full transition-all p-2  flex items-center justify-center">
            <IoMdLogOut className="text-[#d84343] text-xl" />
          </button>
        </abbr>
      </div>
    </>
  )
}
