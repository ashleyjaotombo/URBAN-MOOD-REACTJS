import './Article.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { estFavori, ajouterFavoris } from "../../data/favoris";

function Article({ article }) {
    const [appuyer, setAppuyer] = useState(estFavori(article));

    const handleClick = () => {
        ajouterFavoris(article);
        setAppuyer(valeur => !valeur);
    };

    return (
        <section className="vueArticle">
            <div className={appuyer ? "liked" : "like"} onClick={handleClick}></div>
            <Link to="/articlescreen" className="article-link" state={article}>
                <img className="photo" src={`/Images/${article.genre}/${article.title}.jpg`} alt={article.description} />
                <h4>{article.description}</h4>
                <h4>{article.prix} €</h4>
            </Link>
        </section>
    );
}

export default Article;