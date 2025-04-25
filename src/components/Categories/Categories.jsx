import "./Categories.css";
import { Link } from 'react-router-dom';

function Categories(){
    return (
        <nav className="listeVetement">
            <ul>
                <li><Link to="/homme" className="liste-link">TOUT</Link></li>
                <li><Link to="/hommetshirt" className="liste-link">T-SHIRTS</Link></li>
                <li><Link to="/hommepantalon" className="liste-link">PANTALONS</Link></li>
                <li><Link to="/hommepull" className="liste-link">PULLS</Link></li>
                <li><Link to="/hommeaccessoire" className="liste-link">ACCESSOIRES</Link></li>
            </ul>
        </nav>
    );
};

export default Categories;