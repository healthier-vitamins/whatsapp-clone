import useChangeTopNavButtonState from '../../../hooks/common/useChangeTopNavButtonState'

export default function NewChatSidebar() {
    // -- Hooks
    const changeTopNavButton = useChangeTopNavButtonState()

    return (
        <div className="flex w-full flex-col">
            <div className="flex h-[108px] flex-col bg-[#008069]">
                <div className="flex "></div>
            </div>
            <div onClick={() => changeTopNavButton.onClick(undefined)}>hi</div>
        </div>
    )
}
