import * as React from "react"

const SearchIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search"
        {...props}
    >
        <circle cx={11} cy={11} r={8} />
        <path d="m21 21-4.35-4.35" />
    </svg>
)

export default SearchIcon
