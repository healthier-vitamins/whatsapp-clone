export default function PlusIconSvg({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            className={`text-[rgb(84,101,111)] ${className}`}
            fill="none"
        >
            <title>attach-menu-plus</title>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z"
                fill="currentColor"
            ></path>
        </svg>
    )
}
