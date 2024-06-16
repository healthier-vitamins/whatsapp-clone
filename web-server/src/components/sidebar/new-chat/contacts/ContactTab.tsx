import { UserCircleIcon } from '@heroicons/react/24/solid'
import { IContact } from '../../../../../../shared/types/responses/contacts'

export default function ContactTab({
    contact,
    onClick
}: {
    contact: IContact
    onClick?: (selectedUser: IContact) => void
}) {
    return (
        <div
            className="hover:bg-default-hover-color flex h-[79px] cursor-pointer items-center bg-white"
            onClick={() => !!onClick && onClick(contact)}
        >
            <UserCircleIcon className="ml-[13px] mr-[15px]  h-[49px] w-[49px] text-gray-300" />
            <div className=" flex w-full flex-col items-start ">
                <span className="text-base text-primary-font-color">
                    {contact.username}
                </span>
                {contact.status && (
                    <span className="text-secondary-font-color text-sm">
                        {contact.status}
                    </span>
                )}
            </div>
        </div>
    )
}
