import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import SectionArticle from "../components/SectionArticle/SectionArticle";
import data from "../data/dataFemme.json";
import Categories from "../components/Categories/Categories";

function FemmeTshirt(){

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <h1>T-SHIRTS</h1>
                <Categories genre="femme"/>
                <SectionArticle genre="Femme" TabArticle={data.tshirtA}/>
                <SectionArticle genre="Femme" TabArticle={data.tshirtB}/>
                <SectionArticle genre="Femme" TabArticle={data.tshirtC}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default FemmeTshirt;