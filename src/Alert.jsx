import React from 'react'

const Alert = ({ message }) => {
    return (
        <div className={`${message.error ? 'bg-rose-500' : 'bg-green-500'} sticky top-16 font-semibold text-white p-2`}>
            <p> {message.msg} </p>
        </div>
    )
}

export default Alert