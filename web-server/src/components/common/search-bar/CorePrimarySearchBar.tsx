export default function CorePrimarySearchBar({
    placeholderText,
    className
}: {
    placeholderText?: string
    className?: string
}) {
    return (
        <label className="relative block w-full">
            <input
                placeholder={placeholderText}
                className={`core-primary-textfield !bg-white focus:outline-none ${className}`}
            ></input>
        </label>
    )
}
