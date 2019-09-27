import React from 'react'

const Statistics = ({ good, neutral, bad, average, positivePercentage }) => {
    const isNoFeedback = 
        (good === 0 && neutral === 0 && bad === 0) ? true : false

    const displayResult = () => {
        if (isNoFeedback) {
            return (
                <p>No feedback given</p>
            )
        } else {
            return (
                <div>
                    <p>good {good}</p>
                    <p>neutral {neutral}</p>
                    <p>bad {bad}</p>
                    <p>average {average}</p>
                    <p>positive {positivePercentage}%</p>
                </div>
            )
        }
    }

    return (
        <div>
            <h1>Statistics</h1>
            {displayResult()}
        </div>
    )
}

export { Statistics }