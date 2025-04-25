import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import SectionArticle from "../components/SectionArticle/SectionArticle";
import data from "../data/dataHomme.json";
import Categories from "../components/Categories/Categories";

function HommePull(){

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <h1>PULLS</h1>
                <Categories/>
                <SectionArticle genre="Homme" TabArticle={data.pullA}/>
                <SectionArticle genre="Homme" TabArticle={data.pullB}/>
                <SectionArticle genre="Homme" TabArticle={data.pullC}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default HommePull;