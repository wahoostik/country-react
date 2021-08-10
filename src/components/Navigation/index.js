// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';

// == Composant
const Navigation = () => (
<div className='navigation'>
    <h1>Composant : Navigation</h1>
    <NavLink exact to="/">
        Accueil
    </NavLink>
    <NavLink exact to="a-propos">
        A propos
    </NavLink>
</div>
);

// == Export
export default Navigation;
