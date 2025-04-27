import './AffichageArticle.css';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AffichageArticle(props){
    const navigate = useNavigate();
    return (
            <>
                <button onClick={()=>navigate(-1)} className="bouton-retour">Retour</button>
                <section className="affichage">
                    <img className="photoarticle" src={`/Images/${props.genre}/${props.article.title}.jpg`} alt={props.article.description} />
                    <h4>{props.article.description}</h4>
                    <h4>{props.article.prix} €</h4>
                    <button className="bouton-panier">Ajouter au panier</button>
                </section>
            </>



    );
}
export default AffichageArticle;