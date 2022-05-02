import React, { InputHTMLAttributes } from 'react'

type Props = {
    label: string
}

const Input = ({ label, ...props }: Props & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div>
            <label htmlFor={label} className="sr-only">{label}</label>
            <input {...props} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
        </div>
    )
}

export default Input