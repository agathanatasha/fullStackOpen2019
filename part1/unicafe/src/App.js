import React, { useState } from 'react';
import { Statistics } from './statistics'
import { Button } from './button';

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
        <Button onClick={() => setGood(good + 1)} value="good" />
        <Button onClick={() => setNeutral(neutral + 1)} value="neutral" />
        <Button onClick={() => setBad(bad + 1)} value="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} average={average} positivePercentage={positivePercentage}/>
    </div>
  )
}

export default App;
