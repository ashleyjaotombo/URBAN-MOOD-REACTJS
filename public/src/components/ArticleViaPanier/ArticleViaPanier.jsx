import './ArticleViaPanier.css';
import { Link } from 'react-router-dom';

function ArticleViaPanier({ article, onSupprimer }) {
    return (
        <section className="articlePanier">
            <Link to="/articlescreen" className="article-link-panier" state={article}>
                <ul>
                    <li>
                        <img className="photo-panier" src={`/Images/${article.genre}/${article.title}.jpg`} alt={article.description} />
                    </li>
                    <li>
                        <h4>{article.description}</h4>
                        <h4>{article.prix} €</h4>
                        <h4>Taille : {article.taille}</h4>
                    </li>
                </ul>
            </Link>
            <button className="supprimerPanier" onClick={() => onSupprimer(article)}>
                Supprimer
            </button>
        </section>
    );
}

export default ArticleViaPanier;