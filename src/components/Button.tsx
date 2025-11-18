import React from 'react'

interface Props {
    label: string,
    type?: "button" | "submit" | "reset";
    className?: string
}

export const Button = ({ label, type = "button", className, ...props }: Props) => {
    return (
        <button
            type={type}
            className={`w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition ${className}`} {...props}
        >
            {label}
        </button>
    )
}
