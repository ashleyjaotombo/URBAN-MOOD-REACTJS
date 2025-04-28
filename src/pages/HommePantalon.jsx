import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import SectionArticle from "../components/SectionArticle/SectionArticle";
import data from "../data/dataHomme.json";
import Categories from "../components/Categories/Categories";

function HommePantalon(){

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <h1>PANTALONS</h1>
                <Categories genre="homme"/>
                <SectionArticle TabArticle={data.pantalon}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default HommePantalon;