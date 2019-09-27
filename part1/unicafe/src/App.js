import React, { useState } from 'react';
import { Statistics } from './statistics'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const totalClick = good + neutral + bad
  const average = (good - bad)/totalClick
  const positivePercentage = good/totalClick * 100

  return (
    <div>
      <h1>Give Feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} average={average} positivePercentage={positivePercentage}/>
    </div>
  )
}

export default App;
