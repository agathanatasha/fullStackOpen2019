import React from 'react'

const Total = (props) => {
    const exercisesCount = props.parts.map(part => part.exercises).reduce((a,b) => a + b)

    return (
        <p>Number of exercises {exercisesCount}</p>
    )
}

export { Total }