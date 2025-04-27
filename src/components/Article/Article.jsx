import './Article.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { favoris, ajouterFavoris } from "../../data/favoris";

function Article({ article, genre }) {
    const [appuyer, setAppuyer]=useState(false);

    const handleClick=(props)=>{
        setAppuyer(valeur =>!valeur);
        ajouterFavoris(props);
    }

    return (
        <section className="vueArticle">
            <div className={appuyer===true ? "liked" : "like"} onClick={()=>{handleClick(article)}}></div>
            <Link to="/articlescreen" className="article-link" state={{article, genre}}>
                <img className="photo" src={`/Images/${genre}/${article.title}.jpg`} alt={article.description} />
                <h4>{article.description}</h4>
                <h4>{article.prix} €</h4>
            </Link>
        </section>
    );
}

export default Article;