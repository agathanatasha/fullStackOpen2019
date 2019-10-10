import React, { useState, useEffect } from 'react'
import personsService from './services/persons'
import { Contacts } from './contact';
import { PersonForm } from './personForm';
import { Filter } from './filter';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService.getAll()
      .then(returnedPersons => setPersons(returnedPersons))
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    if (names.includes(newName)) {
      const confirmMsg = `${newName} is already added to phonebook. Do you want to replace the old number with the new one?`
      if (window.confirm(confirmMsg)) {
        const personObject = persons.find(person => person.name === newName)
        const updatedPersonObject = { ...personObject, number: newPhoneNumber }

        personsService.update(updatedPersonObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.name === newName ? returnedPerson : person))
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newPhoneNumber
      }

      personsService.create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
    setNewName('')
    setNewPhoneNumber('')
  }

  const onRemoveName = (event) => {
    const removeNameId = parseInt(event.target.value)
    const removeName = persons.find(person => person.id === removeNameId).name
    if (window.confirm(`Do you want to delete ${removeName}?`)) {
      personsService.remove(removeNameId)
        .then(returnedPersons => {
          setPersons(returnedPersons)
        }
        )
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
      <Contacts persons={persons} filter={filter} onDelete={onRemoveName} />
    </div>
  )
}

export default App