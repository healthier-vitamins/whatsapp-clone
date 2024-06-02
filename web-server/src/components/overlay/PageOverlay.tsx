/**
 * @function PageOverlay
 * Page overlay that's present in whatsapp. The empty unused space that is permanently on the web.whatsapp
 *
 */
export default function PageOverlay({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen w-screen overflow-hidden">
            <div className="flex h-full w-full flex-col">
                {/* // copied green background colour from whatsapp */}
                <div className=" z-0 h-[151px] w-full bg-[#00a884] " />
                <div className=" z-[1] h-full w-full  bg-gray-200" />
            </div>
            <div className="absolute inset-y-0 z-[2] flex h-full w-full items-center justify-center xl:p-4">
                <div className="h-full max-h-[1235px] w-full max-w-[1700px]">
                    {children}
                </div>
            </div>
        </div>
    )
}
