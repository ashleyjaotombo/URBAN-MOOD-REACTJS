import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import SectionArticle from "../components/SectionArticle/SectionArticle";
import data from "../data/dataFemme.json";
import Categories from "../components/Categories/Categories";

function FemmePull(){

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <h1>PULLS</h1>
                <Categories genre="femme"/>
                <SectionArticle TabArticle={data.pull}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default FemmePull;