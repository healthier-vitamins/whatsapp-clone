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
        <div className="relative">
            {/* // copied green background colour from whatsapp */}
            <div className="absolute left-0 top-0 z-0 h-[127px] w-full bg-[#00a884] " />
            <div className="absolute left-0 top-0 z-[1] m-[16px] h-[calc(100vh-32px)] w-[calc(100vw-32px)]  bg-slate-100">
                <div className="relative h-full ">{children}</div>
            </div>
        </div>
    )
}
