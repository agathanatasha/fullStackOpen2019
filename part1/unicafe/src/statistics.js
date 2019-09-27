import React from 'react'
import { Statistic } from './statistic';

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
                <table>
                    <tbody>
                        <Statistic name="good" value={good} />
                        <Statistic name="neutral" value={neutral} />
                        <Statistic name="bad" value={bad} />
                        <Statistic name="average" value={average} />
                        <Statistic name="positive" value={`${positivePercentage}%`} />
                        </tbody>
                </table>
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