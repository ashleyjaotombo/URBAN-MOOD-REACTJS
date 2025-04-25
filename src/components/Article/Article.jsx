import './Article.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Article({ article, genre }) {
    const [appuyer, setAppuyer]=useState(false);

    const handleClick=()=>{
        setAppuyer(valeur =>!valeur);

    }

    return (
        <section>
            <div className={appuyer===true ? "liked" : "like"} onClick={handleClick}></div>
            <Link to="/homme" className="article-link">
                <img className="photo" src={`/Images/${genre}/${article.title}.jpg`} alt={article.description} />
                <h4>{article.description}</h4>
                <h4>{article.prix} €</h4>
            </Link>
        </section>
    );
}

export default Article;