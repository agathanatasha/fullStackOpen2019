import React, { useState, useEffect } from 'react';
import { Filter } from './filter';

import axios from 'axios'
import { Result } from './result';

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  const api_name = "https://restcountries.eu/rest/v2/name/"

  const onFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const onCountryButtonClick = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    console.log(`effect ${api_name}${filter}`)
    axios.get(`${api_name}${filter}`)
      .then((response => {
        console.log("promise fulfilled")
        setCountries(response.data)
      }))
      .catch(error => {
        console.log(error)
        setCountries([])
      })

  }, [filter])


  return (
    <div>
      <Filter filter={filter} onFilterChange={onFilterChange} />
      <Result countries={countries} onCountryButtonClick={onCountryButtonClick} />
    </div>
  );
}

export default App;
