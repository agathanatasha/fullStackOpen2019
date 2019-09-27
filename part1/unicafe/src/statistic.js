import React from 'react'

const Statistic = ({name, value}) => {
    return(
        <tr>
            <td>{name}</td>
            <td>{value}</td>
        </tr>
    )
}

export { Statistic }