import React from 'react'
import MenuIcon from '../public/icons/MenuIcon'
import PlusIcon from '../public/icons/PlusIcon'

const NavBar = () => {
    return (
        <div className="sticky top-0 p-2 border-b backdrop-blur ">
            <div className="flex items-center gap-2">

                {/* <MenuIcon /> */}
                <h2 className="italic font-semibold text-2xl text-blue-500">Phonebook</h2>
                <input
                    className="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    autoFocus
                    type="text"
                    placeholder="Search"
                />
                <button className="  p-2 rounded-full text-center border text-blue-600 ">
                    <PlusIcon />
                </button>
            </div>
        </div>
    )
}

export default NavBar