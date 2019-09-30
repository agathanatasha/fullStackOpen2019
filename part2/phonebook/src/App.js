import React, { useState } from 'react'
import { Contacts } from './contact';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    if ( names.includes(newName) ){
      alert( `${newName} is already added to phonebook` )
    } else {
      setPersons(persons.concat({ name: newName, phone: newPhoneNumber }))
    }
  }

  const onNameFieldChange = (event) => {
    setNewName(event.target.value)
  }

  const onPhoneFieldChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input name="name" 
                       value={newName} 
                       onChange={onNameFieldChange} />
          <br></br>
          phone number: <input name="phone-number" 
                               value={newPhoneNumber}
                               onChange={onPhoneFieldChange} ></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts persons={persons} />
      <div>debug: {newName} {newPhoneNumber}</div>
    </div>
  )
}

export default App