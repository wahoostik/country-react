const Article = ({ props }) => {
    console.log(props);
    return (
<div className='article'>
        <div className="card-header">
            <h3>{props.author}</h3>
                <em>Posté le {props.date}</em>
        </div>        
            <p>{props.content}</p>
        <div className="btn-container">
                <button>Edit</button>
                <button>Delete</button>
        </div>                
</div>
)};

// == Export
export default Article;
