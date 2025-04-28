import "./Nouveautes.css";
import {Link} from "react-router-dom";

function Nouveautes(){
    return (
        <>
            <h2>Nouveautés</h2>
            <div className="nouveaute">
                <section>
                    <img src="/Images/Homme/tshirt2.jpg" alt="pantalon"/>
                    <h4>T-Shirt noir Rocket</h4><br/>
                    <h4>22€</h4>
                    <Link to="/articlescreen" className="article-link" state={{ "title": "tshirt2", "genre":"homme", "prix": 22, "description": "T-Shirt noir Rocket" }}>
                    <button value="ajouter">VOIR ARTICLE</button>
                    </Link>    
                </section>
                <section>
                    <img src="/Images/Femme/pantalon4.jpg" alt="pantalon"/>
                    <h4>Jean large bleu foncé</h4><br/>
                    <h4>32€</h4>
                    <Link to="/articlescreen" className="article-link" state={{ "title": "pantalon4", "genre":"femme", "prix": 32, "description": "Jean large bleu foncé" }}>
                    <button value="ajouter">VOIR ARTICLE</button>
                    </Link>
                </section>
                <section>
                    <img src="/Images/Homme/pull2.jpg" alt="sweat"/>
                    <h4>Hoodie fantaisie blanc</h4><br/>
                    <h4>47€</h4>
                    <Link to="/articlescreen" className="article-link" state={{ "title": "pull2", "genre":"homme", "prix": 47, "description": "Hoodie fantaisie blanc" }}>
                    <button value="ajouter">VOIR ARTICLE</button>
                    </Link>
                </section>
                <section>
                    <img src="/Images/Femme/accessoire3.jpg" alt="lunette"/>
                    <h4>Lunettes camouflage bleues</h4><br/>
                    <h4>18€</h4>
                    <Link to="/articlescreen" className="article-link" state={{ "title": "accessoire3", "genre":"femme", "prix": 18, "description": "Lunettes camouflage bleues" }}>
                    <button value="ajouter">VOIR ARTICLE</button>
                    </Link>
                </section>

            </div>
        </>
    );
};

export default Nouveautes;