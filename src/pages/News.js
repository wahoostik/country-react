import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useEffect } from "react";

const News = () => {
    const baseUrl = 'http://localhost:3004/articles';

    const getData = async () => {
        try {
            const response = await axios.get(baseUrl)
            console.log(response);
        } catch (error) {
            console.trace(error);
        }
    };

useEffect(() => {
getData();
}, []);

    return (    
<div className='news-container'>
    <Navigation />
    <Logo />
        <form>
            <input type="text" placeholder="Nom" />
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="Envoyer" />
        </form>
</div>
)};

// == Export
export default News;
