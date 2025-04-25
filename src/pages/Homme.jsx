import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import Categories from "../components/Categories/Categories";
import SectionArticle from "../components/SectionArticle/SectionArticle";

function Homme(){
    const data1 = [
        { title: "pantalon1", prix: 30, description: "Pantalon cargo beige" },
        { title: "tshirt5", prix: 24, description: "T-Shirt minimal beige" },
        { title: "pull12", prix: 44, description: "Pull graphique" },
        { title: "accessoire7", prix: 19, description: "Collier cercle géométrique" },
    ];
    const data2 = [
        { title: "pull12", prix: 44, description: "Pull graphique" },
        { title: "pantalon5", prix: 34, description: "Pantalon texturé marron" },
        { title: "accessoire4", prix: 79, description: "Bonnet noir" },
        { title: "tshirt4", prix: 27, description: "T-Shirt streetwear" },
    ];
    const data3 = [
        { title: "tshirt1", prix: 20, description: "T-Shirt oversize bleu" },
        { title: "pantalon2", prix: 28, description: "Jean ample gris clair" },
        { title: "pull5", prix: 39, description: "Sweat gris carreaux" },
        { title: "accessoire11", prix: 21, description: "Collier minimal argent" },
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
                <SectionArticle genre="Homme" TabArticle={data2}/>
                <SectionArticle genre="Homme" TabArticle={data3}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Homme;