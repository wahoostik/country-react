// == Import
import PropTypes from 'prop-types';

const Article = ({ articles }) => {
    console.log(articles);

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR');
        return newDate;
    };

    return (
        <div className="article">
            <div className="card-header">
                <h3>{articles.author}</h3>
                <em>Posté le : {dateParser(articles.date)}</em>
            </div>
            <p>{articles.content}</p>
            <div className="btn-container">
                <button>Edit</button>
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
    }),
};

// == Export
export default Article;
