import React from 'react'

export const Contacts = ({ persons }) => {

    const contactsList = persons.map(person => <p key={person.name} >{person.name}</p>)
    return (
        <div>
            {contactsList}
        </div>
    )
}
