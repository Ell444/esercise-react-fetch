import { useEffect, useState } from 'react';
import './App.css';
import CountryCard from './components/CountryCard';
import SearchBar from './components/SearchBar';




function App() {

  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const objArray = await response.json();
    setCountries(objArray);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSearch = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`);
    const obj = await response.json();
    setCountries(obj);
  };


  return (<>
    <SearchBar
      value={searchValue}
      onChange={setSearchValue}
      onSearch={handleSearch} />

    {countries.map((country, index) => (
      <CountryCard
        key={index}
        countryName={country.name.common}
        flagUrl={country.flags.png}
        population={country.population}
        capital={country.capital}
      />
    ))}

  </>)
}

export default App
