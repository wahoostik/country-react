import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const News = () => (
<div className='news-container'>
    <Navigation />
    <Logo />
        <form>
            <input type="text" placeholder="Nom" />
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="Envoyer" />
        </form>
</div>
);

// == Export
export default News;
