// == Import
import { NavLink } from 'react-router-dom';

// == Composant
const Navigation = () => (
<div className='navigation'>
    <NavLink exact to="/" activeClassName="nav-active">
        Accueil
    </NavLink>
    <NavLink exact to="a-propos" activeClassName="nav-active">
        A propos
    </NavLink>
</div>
);

// == Export
export default Navigation;
