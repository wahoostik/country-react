// == Import
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';

const Article = ({ articles }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [ editedContent, setEditedContent] = useState('');

    const baseUrl = 'http://localhost:3004/articles/';
    const data = {
        author: articles.author,
        content: editedContent ? editedContent : articles.content,
        date: articles.date,
        id: articles.id
    };

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR');
        return newDate;
    };

    const handleEdit = async () => {
        console.log('je veux valider');
        try {
            const sendEdit = await axios.put(baseUrl + articles.id, data);
            console.log(sendEdit);
        } catch (error){
            console.trace(error);
        } finally {
            setIsEditing(false);
        }
    };

    return (
        <div className="article">
            <div className="card-header">
                <h3>{articles.author}</h3>
                <em>Posté le : {dateParser(articles.date)}</em>
            </div>
            {isEditing ? (
                <textarea
                    onChange={(event) => setEditedContent(event.target.value)}
                    autoFocus
                    defaultValue={editedContent ? editedContent : articles.content}>
                </textarea>
            ) : (
                <p>{editedContent ? editedContent : articles.content}</p>  
            )}
            <div className="btn-container">
                {isEditing ? (
                    <button onClick={ handleEdit }>Valider</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button> 
                )}
                <button>Delete</button>
            </div>
        </div>
    );
};

Article.propTypes = {
    articles: PropTypes.shape({
        author: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }),
};

// == Export
export default Article;
