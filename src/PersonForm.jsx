import React from 'react'

const PersonForm = ({ newName, newphone, handleSubmit, handleChangeName, handleChangePhone }) => {
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div>
                <h3>Add new contact</h3>
                name:
                <input
                    type="text"
                    value={newName}
                    onChange={handleChangeName}
                />
            </div>
            <div>
                Number:
                <input
                    type="text"
                    value={newphone}
                    onChange={handleChangePhone}
                />
            </div>
            <div>
                <button type="submit"> Add </button>
            </div>
        </form>
    )
}

export default PersonForm