import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useAppSelector } from '../../redux/hooks'
import SmileyIconSvg from '../../svgs/SmileyIconSvg'
import PlusIconSvg from '../../svgs/PlusIconSvg'
import CorePrimarySearchBar from '../../components/common/search-bar/CorePrimarySearchBar'

import { useEffect, useState } from 'react'
import { socket } from '../../socket/socket'

export default function ChatPage() {
    // -- Redux
    const miscSelector = useAppSelector((state) => state.misc)

    // -- Use States
    const [textMessage, setTextMessage] = useState('')

    const [isConnected, setIsConnected] = useState(socket.connected)
    const [fooEvents, setFooEvents] = useState<any>([])

    useEffect(() => {
        function onConnect() {
            setIsConnected(true)
        }

        function onDisconnect() {
            setIsConnected(false)
        }

        function onFooEvent(value: any) {
            setFooEvents((previous: any) => [...previous, value])
        }

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
        socket.on('foo', onFooEvent)

        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
            socket.off('foo', onFooEvent)
        }
    }, [])

    return (
        <div className="flex h-full w-full flex-col items-center ">
            <div className="flex h-[59px] w-full border-l-[1px] border-l-[rgb(209,215,219)] bg-primary-header-background px-4 py-[10px]">
                <UserCircleIcon className="  mr-[15px] h-10 w-10 text-gray-300" />
                <div className="flex h-full w-full items-center text-primary-font-color">
                    {miscSelector.rightPageChat?.username}
                </div>
            </div>
            <div className="w-full flex-grow bg-chat-background-img bg-contain  "></div>
            <div className="flex h-[62px] w-full items-center bg-primary-header-background px-4 py-[5px]">
                <div className="px-3">
                    <SmileyIconSvg className="cursor-pointer" />
                </div>
                <div>
                    <PlusIconSvg className="cursor-pointer" />
                </div>
                <div className="ml-4 flex w-full items-center px-2 py-[5px]">
                    <CorePrimarySearchBar
                        onChange={(value) => setTextMessage(value)}
                        placeholderText="Type a message"
                    />
                </div>
            </div>
        </div>
    )
}
