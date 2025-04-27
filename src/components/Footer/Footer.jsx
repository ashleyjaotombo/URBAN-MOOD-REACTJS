import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <div>
            <form>
                <fieldset>
                    <legend>RESTEZ CONNECTE</legend>
                    <h4>Abonnez-vous à notre newsletter</h4>
                    <input type="text" placeholder="Adresse mail"/>
                    <button type="button" value="envoyer">Envoyer</button>
                </fieldset>
            </form>
            <nav>
                <ul className="footer">
                    <li><Link to="" className="foot-link">A propos</Link></li>
                    <li><Link to="/contact" className="foot-link">Contact</Link></li>
                    <li><Link to="" className="foot-link">Notre histoire</Link></li>
                    <li><Link to="" className="foot-link">Effectuer un retour</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Footer;