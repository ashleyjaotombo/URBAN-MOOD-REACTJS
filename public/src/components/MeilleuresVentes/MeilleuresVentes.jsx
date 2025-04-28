import "./MeilleuresVentes.css";
import {Link} from "react-router-dom";

function MeilleuresVentes(){
    return (
        <>
            <h2>Meilleures ventes</h2>

            <div className="vente">
                <section>
                    <img src="/Images/Femme/pull5.jpg" alt="pantalon"/>
                    <h4>Sweat blanc col montant New York</h4><br/>
                    <h4>33€</h4>
                    <Link to="/articlescreen" className="article-link" state={{ "title": "pull5", "genre":"femme", "prix": 33, "description": "Sweat blanc col montant New York" }}>
                        <button value="ajouter">VOIR ARTICLE</button>
                    </Link>
                </section>
                <section>
                    <img src="/Images/Femme/accessoire4.jpg" alt="pantalon"/>
                    <h4>Lunettes de soleil</h4><br/>
                    <h4>15€</h4>
                    <Link to="/articlescreen" className="article-link" state={{ "title": "accessoire4", "genre":"femme", "prix": 15, "description": "Lunettes de soleil" }}>
                        <button value="ajouter">VOIR ARTICLE</button>
                    </Link>
                </section>
                <section>
                    <img src="/Images/Homme/tshirt8.jpg" alt="sweat"/>
                    <h4>T-Shirt vintage</h4><br/>
                    <h4>28€</h4>
                    <Link to="/articlescreen" className="article-link" state={{ "title": "tshirt8", "genre":"homme", "prix": 28, "description": "T-Shirt vintage" }}>
                        <button value="ajouter">VOIR ARTICLE</button>
                    </Link>
                </section>
                <section>
                    <img src="/Images/Femme/pantalon3.jpg" alt="lunette"/>
                    <h4>Cargo denim à poches</h4><br/>
                    <h4>38€</h4>
                    <Link to="/articlescreen" className="article-link" state={{ "title": "pantalon3", "genre":"femme", "prix": 38, "description": "Cargo denim à poches" }}>
                        <button value="ajouter">VOIR ARTICLE</button>
                    </Link>
                </section>
            </div>
        </>
    );
};

export default MeilleuresVentes;