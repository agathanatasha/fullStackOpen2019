import React, { useState } from 'react';

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
      <h1>Statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>average {average}</p>
        <p>positive {positivePercentage}%</p>
    </div>
  )
}

export default App;
