import React from 'react'

interface Props {
    label: string,
    type?: "button" | "submit" | "reset";
    className?: string
    buttonClick?: () => void;
}

export const Button = ({ label, type = "button", className, buttonClick, ...props }: Props) => {
    return (
        <button
            onClick={buttonClick}
            type={type}
            className={` bg-blue-600  py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer ${className}`} {...props}
        >
            {label}
        </button>
    )
}
