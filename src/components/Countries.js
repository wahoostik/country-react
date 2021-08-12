// == Import
import { useState, useEffect } from 'react';
import axios from 'axios';

// == Composant
const Countries = () => {
  const [data, setData] = useState([]);
  
  const baseUrl = 'https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag';

  const fetchResults = async () => {
    try {
      const response = await axios.get(baseUrl);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.trace(error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

return (
  <div className='countries'>
    <ul className='countries-list'>
      {data.map((country) => (
        <li>{country.name}</li>
      ))}
    </ul>
  </div>
)};

// == Export
export default Countries;
