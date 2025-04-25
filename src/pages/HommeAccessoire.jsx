import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import SectionArticle from "../components/SectionArticle/SectionArticle";
import data from "../data/dataHomme.json";
import Categories from "../components/Categories/Categories";

function HommeAccessoire(){

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <h1>ACCESSOIRES</h1>
                <Categories/>
                <SectionArticle genre="Homme" TabArticle={data.accessoireA}/>
                <SectionArticle genre="Homme" TabArticle={data.accessoireB}/>
                <SectionArticle genre="Homme" TabArticle={data.accessoireC}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default HommeAccessoire;