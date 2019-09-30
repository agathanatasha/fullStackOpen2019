import React, { useState } from 'react'
import { Contacts } from './contact';
import { PersonForm } from './personForm';
import { Filter } from './filter';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    if ( names.includes(newName) ){
      alert( `${newName} is already added to phonebook` )
    } else {
      setPersons(persons.concat({ name: newName, number: newPhoneNumber }))
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