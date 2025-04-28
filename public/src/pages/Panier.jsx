import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import SectionArticleViaPanier from "../components/SectionArticleViaPanier/SectionArticleViaPanier"
import {panier} from "../data/panier";

function Panier() {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <h1>Panier</h1>
                <SectionArticleViaPanier TabPanier={panier}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Panier;
