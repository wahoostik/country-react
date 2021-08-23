// == Import
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

// == Composant
const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    const baseUrl = 'https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag';

    const fetchResults = async () => {
        try {
            const response = await axios.get(baseUrl);
            setData(response.data);
        } catch (error) {
            console.trace(error);
        }
    };

    useEffect(() => {
        fetchResults();
    }, []);

    return (
        <div className='countries'>
            <div className='sort-container'>
                <input
                    type="range"
                    min="1"
                    max="250"
                    value={rangeValue}
                    onChange={(event) => setRangeValue(event.target.value)}
                />
                <ul>
                    {radios.map((radio) => (
                        <li key={radio}>
                            <input
                                type="radio"
                                value={radio}
                                id={radio}
                                checked={radio === selectedRadio}
                                onChange={(event) => setSelectedRadio(event.target.value)}
                            />
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio && (
                    <h5 onClick={() => setSelectedRadio('')}>Annuler recherche</h5>
                )}
            </div>
            <ul className='countries-list'>
                {data
                    .filter((country) => country.region.includes(selectedRadio))
                    // réduire ou augmenter le nombre de pays avec l'input range
                    .sort((a, b) => b.population - a.population)
                    .filter((country, index) => index < rangeValue)
                    .map((country) => (
                        <Card
                            country={country}
                            key={country.name}
                        />
                    ))}
            </ul>
        </div>
    );};

// == Export
export default Countries;
