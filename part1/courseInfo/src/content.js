import React from 'react'
import { Part } from './part';

const Content = ({parts}) => {
    const modules = parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
    return (
        <div>
            {modules}
        </div>
    )
}

export { Content }