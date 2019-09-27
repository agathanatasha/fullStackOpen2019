import React from 'react'

const Statistics = ({good, neutral, bad, average, positivePercentage}) => {
    return (
        <div>
            <h1>Statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>average {average}</p>
            <p>positive {positivePercentage}%</p>
        </div>
    )
}

export { Statistics }