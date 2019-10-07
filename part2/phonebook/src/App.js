import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Contacts } from './contact';
import { PersonForm } from './personForm';
import { Filter } from './filter';

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    console.log("effect")
    axios.get('http://localhost:3001/persons')
         .then(response => {
           console.log("promise fulfilled")
           setPersons(response.data)
         })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    if ( names.includes(newName) ){
      alert( `${newName} is already added to phonebook` )
    } else {
      const personObject = {
        name: newName,
        number: newPhoneNumber
      }

      axios.post('http://localhost:3001/persons', personObject)
         .then(response => {
           setPersons(persons.concat(response.data))
           setNewName('')
           setNewPhoneNumber('')
         })
    }
  }

  const onNameFieldChange = (event) => {
    setNewName(event.target.value)
  }

  const onPhoneFieldChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const onFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter}
              onFilterChange={onFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addName={addName}
                  newName={newName}
                  onNameFieldChange={onNameFieldChange}
                  newPhoneNumber={newPhoneNumber}
                  onPhoneFieldChange={onPhoneFieldChange} />
      <h2>Numbers</h2>
      <Contacts persons={persons} filter={filter} />
    </div>
  )
}

export default App