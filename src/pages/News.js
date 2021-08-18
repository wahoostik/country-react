import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Article from "../components/Article";

const News = () => {
    const [newsData, setNewsData] = useState([]);

    const baseUrl = 'http://localhost:3004/articles';

    const getData = async () => {
        try {
            const response = await axios.get(baseUrl);
            setNewsData(response.data);
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
            <ul>{newsData.map((article) => (
                <Article key={article.id} props={article}/>
            ))}</ul>
</div>
)};

// == Export
export default News;
