import React from 'react'

export const CountryDetail = ({ country }) => {
    const languages = country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)
    return (
        <div>
            <h1>{country.name}</h1>
            <p>
                capital: {country.capital}
                <br></br>
                population: {country.population}
            </p>
            <h2>Languages</h2>
            <ul>
                {languages}
            </ul>
            <img src={country.flag} alt="flag" width={400} ></img>
        </div>
    )
}