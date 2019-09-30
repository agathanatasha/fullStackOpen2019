import React from 'react'

export const Filter = ({ filter, onFilterChange }) => {
    return (
        <div>
            filter shown with <input name="filter"
                                     value={filter}
                                     onChange={onFilterChange} ></input>
        </div>
    )
}