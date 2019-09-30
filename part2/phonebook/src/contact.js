import React from 'react'

export const Contacts = ({ persons, filter }) => {

    const contactsList = persons.filter(person => person.name.includes(filter))
                                .map(person => <p key={person.name} >{person.name} {person.number}</p>)
    return (
        <div>
            {contactsList}
        </div>
    )
}
