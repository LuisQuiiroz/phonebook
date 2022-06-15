import React from 'react'

const PersonForm = ({ newName, newphone, handleSubmit, handleChangeName, handleChangePhone }) => {
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            {/* <h3>Add new contact</h3> */}
            <div className=" py-4 md:flex grid gap-4">
                <div className="w-full md:w-2/5">
                    <label htmlFor="name" className="font-semibold text-blue-600">Name</label>
                    <input
                        className="form-control block w-full  px-4 py-2  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="text"
                        id="name"
                        autoFocus
                        value={newName}
                        onChange={handleChangeName}
                    />
                </div>
                <div className="w-full md:w-2/5 ">
                    <label htmlFor="number" className="font-semibold text-blue-600">Number</label>
                    <input
                        className="form-control block w-full  px-4 py-2  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="number"
                        type="text"
                        value={newphone}
                        onChange={handleChangePhone}
                    />
                </div>
                <div className="w-full md:w-1/5 grid content-end">
                    <input type="submit" className="form-control w-full  py-2 border border-solid border-gray-300 bg-blue-600 rounded-md text-center text-white font-semibold " value="Create" />
                </div>
            </div>
        </form>
    )
}

export default PersonForm