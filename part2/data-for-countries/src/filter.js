import React from 'react'

export const Filter = ({ filter, onFilterChange }) => {
    return (
        <div>
            find countries <input name="filter"
                value={filter}
                onChange={onFilterChange}></input>
        </div>
    )
}