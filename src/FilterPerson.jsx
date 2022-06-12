import React from 'react'

const FilterPerson = ({ filterPerson }) => {
    return (
        <>
            {
                filterPerson.map(person =>
                    <div key={person.name}>
                        <label> {person.name} </label>
                        <label> {person?.phone} </label>
                    </div>)
            }
        </>
    )
}

export default FilterPerson