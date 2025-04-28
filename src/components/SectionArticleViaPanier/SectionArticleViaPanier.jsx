import { useState } from "react";
import ArticleViaPanier from "../ArticleViaPanier/ArticleViaPanier";
import './SectionArticleViaPanier.css';

function SectionArticleViaPanier({ TabPanier }) {
    const [articles, setArticles] = useState([...TabPanier]);

    const handleSupprimer = (article) => {
        const updatedArticles = articles.filter(
            (a) => !(a.title === article.title && a.taille === article.taille)
        );
        setArticles(updatedArticles);
    };

    return (
        <div className="paniersection">
            {articles.length > 0 ? (

                articles.map((article) => (
                    <ArticleViaPanier article={article} onSupprimer={handleSupprimer}/>
                ))
            ) : (
                <p className="panier-vide">Votre panier est vide.</p>
            )}
        </div>
    );
}

export default SectionArticleViaPanier;