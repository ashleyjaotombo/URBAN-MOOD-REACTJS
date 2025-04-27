import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import Categories from "../components/Categories/Categories";
import SectionArticle from "../components/SectionArticle/SectionArticle";

function Homme(){
    const data1 = [
        { title: "pantalon1", genre:"homme", prix: 30, description: "Pantalon cargo beige" },
        { title: "tshirt5", genre:"homme", prix: 24, description: "T-Shirt minimal beige" },
        { title: "pull12", genre:"homme", prix: 44, description: "Pull graphique" },
        { title: "accessoire7", genre:"homme", prix: 19, description: "Collier cercle géométrique" },
        { title: "pull12", genre:"homme", prix: 44, description: "Pull graphique" },
        { title: "pantalon5", genre:"homme", prix: 34, description: "Pantalon texturé marron" },
        { title: "accessoire4", genre:"homme", prix: 79, description: "Bonnet noir" },
        { title: "tshirt4", genre:"homme", prix: 27, description: "T-Shirt streetwear" },
        { title: "tshirt1", genre:"homme", prix: 20, description: "T-Shirt oversize bleu" },
        { title: "pantalon2", genre:"homme", prix: 28, description: "Jean ample gris clair" },
        { title: "pull5", genre:"homme", prix: 39, description: "Sweat gris carreaux" },
        { title: "accessoire11", genre:"homme", prix: 21, description: "Collier minimal argent" },
    ];
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <h1>HOMME</h1>
                <Categories genre="homme"/>
                <SectionArticle genre="Homme" TabArticle={data1}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Homme;