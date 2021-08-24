// == Import
import axios from 'axios';
import PropTypes from 'prop-types';

// == Composant
const DeleteArticle = ({id}) => {

    const baseUrl = 'http://localhost:3004/articles/';
    
    const handleDelete = async () => {
        console.log('je veux supprimer l\'article');
        try {
            const deleteTheArticle = await axios.delete(baseUrl + id);
            console.log(deleteTheArticle);
        } catch (error) {
            console.trace(error);
        } finally {
            window.location.reload();
        }
    };

    return (
        <button onClick={() => {
            if (window.confirm('Voulez-vous vraiment supprimer cet article ?')) {
                handleDelete();
            }
        }}>Supprimer</button>
    );
};
    
DeleteArticle.propTypes = {
    id: PropTypes.number.isRequired
};

// == Export
export default DeleteArticle;
