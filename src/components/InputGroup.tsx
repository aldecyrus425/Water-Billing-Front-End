import React from 'react'

interface Props {
  label: string;
  className?: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password" | "file";
  value?: string;
  isDisabled?: boolean
}

export const InputGroup = ({ label, className, placeholder, type = "text", value, isDisabled, ...props }: Props) => {
  return (
    <div className='w-full'>
      <label className="text-gray-700 text-sm font-medium">{label}</label>
      <input
        type={type}
        className={`mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none ${className} ${isDisabled ? "text-slate-500 border-slate-300" : ""}`}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        {...props}
      />
    </div>

  )
}
