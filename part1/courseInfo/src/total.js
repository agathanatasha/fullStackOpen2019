import React from 'react'

const Total = ({parts}) => {
    const exercisesCount = parts.map(part => part.exercises).reduce((a,b) => a + b)

    return (
        <p><b>Total of {exercisesCount} exercise</b></p>
    )
}

export { Total }