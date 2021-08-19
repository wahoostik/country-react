/* eslint-disable react/no-unescaped-entities */
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => (
    <div>
        <Navigation />
        <Logo />
        <h1>A propos</h1>
        <br />
        <p>
        De nombreuses publications donnent une liste des pays du monde, mais elles n'utilisent pas toutes les mêmes critères pour inclure ou non un pays.
        Un critère courant mais flou est la reconnaissance du pays par la communauté internationale,
        notamment sa reconnaissance par l'Organisation des Nations unies qui compte 193 États membres et reconnaît quatre États non membres
        (dont deux avec le statut d’observateurs permanents).
        </p>
        <br />
        <p>
        Ces quatre États non membres sont le Vatican (observateur permanent depuis 1964), l'État de Palestine (observateur permanent depuis 2012),
        et les Îles Cook et Niue, deux territoires insulaires en libre association avec la Nouvelle-Zélande.
        </p>
        <br />
        <p>
        Six pays sont reconnus par au moins un État membre de l'ONU sans être reconnus par l'ONU : le Kosovo, la République arabe sahraouie démocratique,
        la république de Chine (Taïwan), l'Abkhazie, l'Ossétie du Sud, la république turque de Chypre du Nord. En outre, la république moldave de Transnistrie
        et la république du Haut-Karabagh se reconnaissent mutuellement, et sont reconnues par l'Ossétie du Sud et l'Abkhazie. La crise ukrainienne a donné lieu
        à l'apparition de deux entités non reconnues, la république populaire de Donetsk et la république populaire de Lougansk.
        Enfin, un territoire indépendant de facto depuis 1990 n'est également reconnu par aucun pays, la république du Somaliland.
        </p>
        <br />
        <p>
        Lorsque Taïwan est inclus dans une liste, c'est souvent accompagné d'un avertissement sur le caractère non officiel de la liste
        ou sur le fait que Taïwan n'est pas reconnunote 3. En effet, le statut de Taïwan est particulier du fait que la république populaire de Chine
        exige la reconnaissance du principe d'une seule Chine de la part des pays qui veulent avoir des rapports diplomatiques avec elle.
        </p>
    </div>
);

// == Export
export default About;
