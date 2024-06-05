import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from '../../../utilities/tailwind/classNames'

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
    onClick: () => void
    options: CoreOptionsType
}) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {placeholder}
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
                <MenuItems className="absolute right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <MenuItem>
                            {({ focus }) => (
                                <span
                                    className={classNames(
                                        focus
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    onClick={onClick}
                                >
                                    Account settings
                                </span>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ focus }) => (
                                <span
                                    className={classNames(
                                        focus
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Support
                                </span>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ focus }) => (
                                <span
                                    className={classNames(
                                        focus
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    License
                                </span>
                            )}
                        </MenuItem>
                    </div>
                </MenuItems>
            </Transition>
        </Menu>
    )
}
