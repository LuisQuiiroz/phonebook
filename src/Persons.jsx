import React from 'react'

const Persons = ({ persons, deletePerson }) => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr className="divide-gray-200 bg-white">
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone number</th>
                                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {
                                    persons.map(person =>
                                        <tr key={person.name} className="hover:bg-slate-200">
                                            <td className="whitespace-nowrap px-3 pl-4 py-4 text-sm">
                                                <div className="font-medium text-gray-800">
                                                    {person.name}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                <div className="font-medium text-gray-800">
                                                    {person?.number}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap py-3 text-sm text-center ">
                                                <input className="cursor-pointer text-red-600 font-semibold px-3 py-1 border border-transparent hover:bg-rose-200 hover:rounded-full hover:border-red-600" type="button" value="Delete" onClick={() => deletePerson(person.id, person.name)} />
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Persons