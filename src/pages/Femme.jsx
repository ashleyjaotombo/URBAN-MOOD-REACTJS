import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import Categories from "../components/Categories/Categories";
import SectionArticle from "../components/SectionArticle/SectionArticle";

function Femme(){
    const data1 = [
        { title: "pantalon1", prix: 35, description: "Jean brut coupe droite" },
        { title: "tshirt5", prix: 25, description: "T-shirt blanc papillon pastel" },
        { title: "pull12", prix: 31, description: "Pull jaune moutarde en grosses mailles" },
        { title: "accessoire7", prix: 19, description: "Collier cercle géométrique doré" }
    ];

    const data2 = [
        { title: "pull12", prix: 31, description: "Pull jaune moutarde en grosses mailles" },
        { title: "pantalon5", prix: 34, description: "Pantalon large vert foncé" },
        { title: "accessoire4", prix: 79, description: "Bonnet noir brodé LA" },
        { title: "tshirt4", prix: 23, description: "T-shirt beige Los Angeles" }
    ];

    const data3 = [
        { title: "tshirt1", prix: 24, description: "T-shirt blanc smiley fleurs" },
        { title: "pantalon2", prix: 33, description: "Jean délavé droit clair" },
        { title: "pull5", prix: 33, description: "Sweat blanc col montant New York" },
        { title: "accessoire11", prix: 21, description: "Collier minimal argenté" }
    ];
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <h1>FEMME</h1>
                <Categories genre="femme"/>
                <SectionArticle genre="Femme" TabArticle={data1}/>
                <SectionArticle genre="Femme" TabArticle={data2}/>
                <SectionArticle genre="Femme" TabArticle={data3}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Femme;