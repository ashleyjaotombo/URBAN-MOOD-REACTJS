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
                <SectionArticle TabArticle={data.tshirt}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default FemmeTshirt;