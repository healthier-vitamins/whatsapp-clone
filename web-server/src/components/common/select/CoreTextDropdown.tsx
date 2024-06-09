import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from '../../../utilities/tailwind/classNames'
import { useState } from 'react'

interface ICoreOptions {
    id: string
    description: string
}

type CoreOptionsType = ICoreOptions[]

export default function CoreTextDropdown({
    placeholder,
    onClick,
    options
}: {
    placeholder: string
    onClick: (id: string) => void
    options: CoreOptionsType
}) {
    // ! Use States
    const [selectedId, setSelected] = useState<string | undefined>()

    // ! Functions
    function onClickWrapper(id: string) {
        onClick(id)
        setSelected(id)
    }

    function displayValue() {
        if (selectedId) {
            const selectedDesc = options.find(
                (detail) => detail.id == selectedId
            )?.description
            if (selectedDesc) {
                return selectedDesc
            }
            return placeholder
        } else {
            return placeholder
        }
    }

    return (
        <Menu
            as="div"
            className="relative inline-block border border-red-600 text-left"
        >
            <div>
                <MenuButton className="inline-flex w-full  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {displayValue()}
                    <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </MenuButton>
            </div>

            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="absolute right-0 z-10 mt-2 min-w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map((detail) => {
                            return (
                                <MenuItem>
                                    {({ focus }) => (
                                        <span
                                            className={classNames(
                                                focus
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            onClick={() =>
                                                onClickWrapper(detail.id)
                                            }
                                        >
                                            {detail.description}
                                        </span>
                                    )}
                                </MenuItem>
                            )
                        })}
                    </div>
                </MenuItems>
            </Transition>
        </Menu>
    )
}
