import { useEffect, useRef, useState } from 'react'
import ChevronDownSvg from '../../../svgs/ChevronDownSvg'
import classNames from '../../../utilities/tailwind/classNames'

interface ICoreOptions {
    id: string
    description: string
}

type CoreOptionsType = ICoreOptions[]

export default function CoreTextDropdown({
    placeholder = 'Please choose an option',
    onClick,
    options,
    className
}: {
    placeholder?: string
    onClick: (id: string) => void
    options: CoreOptionsType
    className?: string
}) {
    // ! Use States
    const [selectedOption, setSelectedOption] = useState<string>('')
    const [openDropdown, setOpenDropdown] = useState(false)

    // ! Refs
    const dropdownRef = useRef<HTMLDivElement>(null)

    // ! Functions
    function handleChange(id: string) {
        onClick(id)
        setSelectedOption(id)
        setOpenDropdown(false)
    }

    function renderValue() {
        const selected = options.find((option) => option.id == selectedOption)
        if (selected?.description) return selected?.description

        return placeholder
    }

    // ! Use Effects
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])

    return (
        <div
            ref={dropdownRef}
            className={`relative flex w-full min-w-full items-center justify-start ${className}`}
        >
            <button
                className="core-textfield"
                value={selectedOption}
                onClick={(e) => {
                    e.preventDefault()
                    setOpenDropdown((prev) => !prev)
                }}
            >
                {renderValue()}
            </button>
            {openDropdown && (
                <ul className="absolute top-[39px] min-w-full">
                    <li
                        className="core-dropdown-option !cursor-default rounded-t-lg !bg-slate-50 "
                        value={''}
                    >
                        {placeholder}
                    </li>
                    {options.map((option, index) => {
                        const selected = options.find(
                            (option) => option.id == selectedOption
                        )
                        return (
                            <li
                                className={`core-dropdown-option ${classNames(
                                    index == options.length - 1
                                        ? 'rounded-b-lg !border-b-0'
                                        : ''
                                )} ${classNames(selected?.description ? 'bg-slate-500' : '')}`}
                                value={option.id}
                                onClick={() => handleChange(option.id)}
                            >
                                {option.description}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}
