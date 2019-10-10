import React from 'react'

export const Contacts = ({ persons, filter, onDelete }) => {

    const contactsList = persons.filter(person => person.name.includes(filter))
                                .map(person => <p key={person.name} >{person.name} {person.number} <button value={person.id} onClick={onDelete}>delete</button></p>)
    return (
        <div>
            {contactsList}
        </div>
    )
}
