import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Article from '../components/Article';

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const baseUrl = 'http://localhost:3004/articles';

    const getData = async () => {
        try {
            const response = await axios.get(baseUrl);
            setNewsData(response.data);
        } catch (error) {
            console.trace(error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('submit');
        try {
            const send = await axios.post(baseUrl, {
                author: author,
                content: content,
                date: Date.now(),
            });
            console.log(send);
            setAuthor('');
            setContent('');
            getData();
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
            <form
                onSubmit={(event) => handleSubmit(event)}>
                <input
                    onChange={(event) => setAuthor(event.target.value)}
                    type="text"
                    placeholder="Nom"
                    value={author}
                />
                <textarea
                    onChange={(event) => setContent(event.target.value)}
                    placeholder="Message"
                    value={content}
                ></textarea>
                <input
                    type="submit"
                    value="Envoyer" />
            </form>
            <ul>{newsData
                // pour trier les messages du plus récent au plus ancien
                .sort((a, b) => b.date - a.date)
                .map((article) => (
                    <Article key={article.id} articles={article}/>
                ))}</ul>
        </div>
    );};

// == Export
export default News;
