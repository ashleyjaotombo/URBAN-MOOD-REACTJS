import './AffichageArticle.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { panier, ajouterPanier } from "../../data/panier";

function AffichageArticle({ article }) {



    const [ajouter, setAjouter]=useState(false);
    const navigate = useNavigate();
    const [taille, setTaille] = useState('');
    const [erreur, setErreur] = useState(false);

    let messageErreur = null;
    if (erreur) {
        messageErreur = <p className="erreur-taille">Veuillez sélectionner une taille avant d'ajouter au panier.</p>;
    }

    let messageAjouter=null;
    if (ajouter===true){
        messageAjouter = <p className="erreur-taille">Article ajouté au panier</p>;
    }

    const handleSelect = (value) => {
        setTaille(value);
        setErreur(false);
        setAjouter(false);
    };

    const handleAddToCart = () => {
        if (!taille) {
            setErreur(true);
            return;
        }

        article.taille = taille;
        ajouterPanier(article);
        setAjouter(true);

    };



    return (
        <>
            <button onClick={() => navigate(-1)} className="bouton-retour">Retour</button>
            <section className="affichage">
                <img className="photoarticle" src={`/Images/${article.genre}/${article.title}.jpg`} alt={article.description} />
                <h4>{article.description}</h4>
                <h4>{article.prix} €</h4>

                <fieldset>
                    <legend>Sélectionnez la taille :</legend>
                    <button type="button" className={taille === 'M' ? 'selected' : 'option'} onClick={() => handleSelect('M')}>M</button>
                    <button type="button" className={taille === 'L' ? 'selected' : 'option'} onClick={() => handleSelect('L')}>L</button>
                    <button type="button" className={taille === 'XL' ? 'selected' : 'option'} onClick={() => handleSelect('XL')}>XL</button>
                </fieldset>

                {messageErreur}
                {messageAjouter}

                <button className="bouton-panier" onClick={handleAddToCart}>
                    Ajouter au panier
                </button>
            </section>
        </>
    );
}

export default AffichageArticle;
