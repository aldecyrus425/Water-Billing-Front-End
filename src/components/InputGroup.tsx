import React from 'react'

interface Props {
    label : string,
    className ?: string,
    placeholder : string,
    type? : "text" | "number";

}

export const InputGroup = ({label, className, placeholder, type = "text", ...props} : Props) => {
  return (
    <div>
            <label className="text-gray-700 text-sm font-medium">{label}</label>
            <input
              type={type}
              className={`mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none ${className}`}
              placeholder={placeholder}
              {...props}
            />
          </div>

  )
}
