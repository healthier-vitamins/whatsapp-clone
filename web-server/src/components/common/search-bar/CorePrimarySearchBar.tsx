import { useState } from 'react'

export default function CorePrimarySearchBar({
    placeholderText,
    className,
    onChange
}: {
    placeholderText?: string
    className?: string
    onChange?: (input: string) => void
}) {
    // -- Use States
    const [inputValue, setInputValue] = useState('')

    return (
        <label className="relative block w-full">
            <input
                placeholder={placeholderText}
                className={`core-primary-textfield !bg-white focus:outline-none ${className}`}
                onChange={(e) => {
                    onChange && onChange(e.target.value)
                    setInputValue(e.target.value)
                }}
                value={inputValue}
            />
        </label>
    )
}
