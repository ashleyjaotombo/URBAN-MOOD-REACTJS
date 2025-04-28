import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import Categories from "../components/Categories/Categories";
import SectionArticle from "../components/SectionArticle/SectionArticle";

function Femme(){
    const data = [
        { title: "pantalon1", genre:"femme", prix: 35, description: "Jean brut coupe droite" },
        { title: "tshirt5", genre:"femme", prix: 25, description: "T-shirt blanc papillon pastel" },
        { title: "pull12", genre:"femme", prix: 31, description: "Pull jaune moutarde en grosses mailles" },
        { title: "accessoire7", genre:"femme", prix: 19, description: "Collier cercle géométrique doré" },
        { title: "pull9", genre:"femme", prix: 31, description: "Pull jaune moutarde en grosses mailles" },
        { title: "pantalon5", genre:"femme", prix: 34, description: "Pantalon large vert foncé" },
        { title: "accessoire4", genre:"femme", prix: 79, description: "Bonnet noir brodé LA" },
        { title: "tshirt4", genre:"femme", prix: 23, description: "T-shirt beige Los Angeles" },
        { title: "tshirt1", genre:"femme", prix: 24, description: "T-shirt blanc smiley fleurs" },
        { title: "pantalon2", genre:"femme", prix: 33, description: "Jean délavé droit clair" },
        { title: "pull5", genre:"femme", prix: 33, description: "Sweat blanc col montant New York" },
        { title: "accessoire11", genre:"femme", prix: 21, description: "Collier minimal argenté" }
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
                <SectionArticle genre="Femme" TabArticle={data}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Femme;