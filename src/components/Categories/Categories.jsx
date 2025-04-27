import "./Categories.css";
import { Link } from 'react-router-dom';

function Categories(props){
    return (
        <nav className="listeVetement">
            <ul>
                <li><Link to={`/${props.genre}`} className="liste-link">TOUT</Link></li>
                <li><Link to={`/${props.genre}tshirt`} className="liste-link">T-SHIRTS</Link></li>
                <li><Link to={`/${props.genre}pantalon`} className="liste-link">PANTALONS</Link></li>
                <li><Link to={`/${props.genre}pull`} className="liste-link">PULLS</Link></li>
                <li><Link to={`/${props.genre}accessoire`} className="liste-link">ACCESSOIRES</Link></li>
            </ul>
        </nav>
    );
};

export default Categories;