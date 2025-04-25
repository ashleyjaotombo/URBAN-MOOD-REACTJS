import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import Promos from "../components/Promo/Promos"
import MeilleuresVentes from "../components/MeilleuresVentes/MeilleuresVentes";
import Nouveautes from "../components/Nouveautes/Nouveautes";
import Avis from "../components/Avis/Avis";
import Footer from "../components/Footer/Footer";

function Accueil() {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <Promos/>
                <MeilleuresVentes/>
                <Nouveautes/>
                <Avis/>

            </main>
            <footer>
                <Footer/>
            </footer>
        </>

    );
}

export default Accueil;