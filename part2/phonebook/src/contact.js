import React from 'react'

export const Contacts = ({ persons }) => {

    const contactsList = persons.map(person => <p key={person.name} >{person.name} {person.phone}</p>)
    return (
        <div>
            {contactsList}
        </div>
    )
}
