import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <img className="logo" src="/Images/logo.png" alt="logo"/>
            <ul className="navbar">
                <li><Link to="/accueil" className="nav-link">Accueil</Link></li>
                <li><Link to="/boutique" className="nav-link">Boutique</Link></li>
                <li><Link to="/favoris" className="nav-link">Favoris</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                <li><img src="/Images/recherche.png" alt="Recherche" id="ouvrirRecherche"/></li>
                <li><Link to="/accueil"><img src="/Images/compte.png" alt="logo"/></Link></li>
                <li><Link to="/panier"><img src="/Images/panier.png" alt="logo"/></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

