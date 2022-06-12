import axios from 'axios';
import { useEffect, useState } from 'react'
import PlusIcon from '../public/icons/PlusIcon';
import Alert from './Alert';
import FilterPerson from './FilterPerson';
import NavBar from './NavBar';
import PersonForm from './PersonForm';
import Persons from './Persons';
import { createInDB, deletePersondDB, getAll, updatePersonDB } from './services';

function App() {
  const initialMessage = { msg: '', error: false, show: false }
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterPerson, setFilterPerson] = useState([]);
  const [message, setMessage] = useState(initialMessage);


  useEffect(() => {
    getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      setFilterPerson(persons.filter(person => person.name.includes(search) && person))
    } else {
      setFilterPerson([])
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewName(newName.trim())
    setNewNumber(newNumber.trim())

    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with  a new one?`)) {
        const updatePerson = persons.find(person => person.name === newName)
        const objUpdatePerson = { ...updatePerson, number: newNumber }
        updatePersonDB(updatePerson.id, objUpdatePerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== updatePerson.id ? person : response))
            setNewName('')
            setNewNumber('')
            setMessage({
              msg: `'${response.name}' was updated correctly`,
              show: true,
            })
            setTimeout(() => {
              setMessage(initialMessage)
            }, 3000);
          })
      }
    } else {
      const objPerson = {
        name: newName, number: newNumber
      }
      createInDB(objPerson)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
          setMessage({
            msg: `Added ${response.name}`,
            show: true,
          })
          setTimeout(() => {
            setMessage(initialMessage)
          }, 3000);

        })
        .catch((error) => console.log(error))
    }
  }
  const handleChangeSeaarch = e => setSearch(e.target.value)
  const handleChangeName = e => setNewName(e.target.value)
  const handleChangePhone = e => setNewNumber(e.target.value)

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      deletePersondDB(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch((error) => {
          setMessage({
            msg: `'${name}' was already removed from server`,
            show: true,
            error: true
          })
          setTimeout(() => {
            setMessage(initialMessage)
          }, 3000);
        })
    }
  }


  return (
    <div className="bg-stone-100">
      <NavBar />
      {
        message.show && <Alert message={message} />
      }
      <div className="container mx-auto px-4">
        {/* <div className="flex items-center justify-center">
          <input
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:border-blue-600 focus:outline-none"
            autoFocus
            type="text"
            value={search}
            onChange={handleChangeSeaarch}
            placeholder="Search"
          />
          <button className=" m-2 p-2 rounded-full text-center border text-blue-600 ">
            <PlusIcon />
          </button>
          <Input
            value={search}
            onChange={handleChangeSeaarch}
            placeholder="Search"
          /> 

        </div>
        <div>
          <Persons
            persons={filterPerson}
            deletePerson={deletePerson}
          />
        </div> */}
        <div>
          <PersonForm
            newName={newName}
            newphone={newNumber}
            handleSubmit={handleSubmit}
            handleChangeName={handleChangeName}
            handleChangePhone={handleChangePhone}
          />
        </div>

        <div>
          <h2>Numbers:</h2>
          <Persons
            persons={persons}
            deletePerson={deletePerson}
          />
        </div>
      </div>
    </div>

  )
}

export default App
