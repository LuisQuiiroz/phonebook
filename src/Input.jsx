import React from 'react'

const Input = ({ value, onChange, placeholder = '' }) => {
    return (
        <div>
            <input
                className=" bg-[#f1f3f4]"
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input