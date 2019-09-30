import React from 'react'
import { CountryDetail } from './countryDetail';

export const Result = ({ countries }) => {
    if (countries.length === 0) {
        return <div></div>
    } else if (countries.length > 10) {
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (countries.length === 1) {
        const country = countries[0]
        return(
            <CountryDetail country={country} />
        )
    } else {
        const countries_name = countries.map(country => <p key={country.name}>{country.name}</p>)
        return (
            <div>
                {countries_name}
            </div>
        )
    }
}