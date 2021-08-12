// == Import

// == Composant
const Card = ({country}) => {
    console.log(country);

    // regex qui permet de placer un espace après 3 chiffres
    const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    
    return (
<li className='card'>
        <img src={country.flag} alt='flag'></img>
        <div className='data-container'>
            <ul>
                <li>{country.name}</li>
                <li>{country.capital}</li>
                <li>Population : {numberFormat(country.population)}</li>
            </ul>
        </div>
</li>
)};

// == Export
export default Card;
