import React from 'react'

export const PersonForm = ({ addName, newName, onNameFieldChange, newPhoneNumber, onPhoneFieldChange }) => {
    return (
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
    )
}