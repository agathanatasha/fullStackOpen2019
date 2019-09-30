import React, { useState } from 'react'
import { Contacts } from './contact';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    if ( names.includes(newName) ){
      alert( `${newName} is already added to phonebook` )
    } else {
      setPersons(persons.concat({ name: newName }))
    }
  }

  const onNameFieldChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={onNameFieldChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts persons={persons} />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App