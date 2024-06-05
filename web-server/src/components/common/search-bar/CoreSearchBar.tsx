import Search from '../../../svgs/Search'

export default function CoreSearchBar({
    placeholderText
}: {
    placeholderText?: string
}) {
    return (
        <div className="flex h-full w-full bg-white px-4 pb-2 pt-2">
            {/* <div className="mx-auto max-w-sm">
                <h2 className="mb-2 text-lg font-semibold">Card Details</h2>
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Card number"
                        className="block w-full rounded-t-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <div className="flex -space-x-px">
                        <input
                            type="text"
                            placeholder="MM / YY"
                            className="block w-1/2 rounded-bl-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="CVC"
                            className="block w-1/2 rounded-br-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            </div> */}
            <label className="relative block w-full">
                <Search className="absolute left-4 top-[10px] h-4 w-4 text-[#3b4a54]" />
                <input
                    placeholder={placeholderText}
                    className="h-[35px] w-full rounded-lg bg-[rgb(240,242,245)] py-1 pl-12 pr-4 text-[#3b4a54] placeholder:text-gray-500 focus:outline-none"
                ></input>
            </label>
        </div>
    )
}
