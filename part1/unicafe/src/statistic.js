import React from 'react'

const Statistic = ({name, value}) => {
    return(
        <p>
            {name} {value}
        </p>
    )
}

export { Statistic }