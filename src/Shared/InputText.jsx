import React from 'react'

export default function InputText({placeholder, type}) {
  return (
    <div>
        <input placeholder={placeholder} type={type} className="p-3 rounded-2xl bg-[#2a2a2a] my-2 w-64"/>
    </div>
  )
}
