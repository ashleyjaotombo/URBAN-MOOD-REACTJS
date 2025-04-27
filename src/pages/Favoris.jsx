import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import SectionArticle from "../components/SectionArticle/SectionArticle";
import { favoris } from "../data/favoris";


function Favoris() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <PanneauRecherche />
                <h1>Mes Favoris</h1>
                <SectionArticle genre="homme" TabArticle={favoris} />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Favoris;
