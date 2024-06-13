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
            className=" rounded-full transition-all p-2 border flex items-center justify-center hover:border-[#112d1b] border-[#000000]">
            <IoMdLogOut className="text-[#d84343] text-lg" />
          </button>
        </abbr>
      </div>
    </>
  )
}
