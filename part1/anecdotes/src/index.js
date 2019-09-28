import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { MostVotes } from './mostVotes';

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

    let randomInt = () => {
        let min = 0
        let max = anecdotes.length - 1
        return Math.floor(Math.random() * (max - min)) + min
    }

    const updateVotes = () => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        return setVotes(newVotes)
    }

    return (
        <div>
            {props.anecdotes[selected]}
            <br />
            Number of votes: {votes[selected]}
            <br />
            <button onClick={updateVotes}>Vote</button>
            <button onClick={() => setSelected(randomInt)}>Next anecdote</button>
            <br />
            <MostVotes anecdotes={props.anecdotes} votes={votes} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)