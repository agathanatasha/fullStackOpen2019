import React from 'react';

const Button = ({onClick, value}) => {
    return(
        <button onClick={onClick}>{value}</button>
    )
}

export { Button }