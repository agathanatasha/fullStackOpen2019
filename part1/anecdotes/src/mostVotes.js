import React from 'react'

const MostVotes = ({ anecdotes, votes }) => {
    const maxVotes = Math.max(...votes)
    const maxIndex = votes.indexOf(maxVotes)

    if (maxVotes === 0) {
        return (
            <h1>No votes yet</h1>
        )
    } else {
        return (
            <div>
                <h1>Anecdote with the most votes</h1>
                <p>{`${anecdotes[maxIndex]} has ${maxVotes} votes`}</p>
            </div>
        )
    }


}

export { MostVotes }