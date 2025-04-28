import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import Genre from "../components/Genre/Genre";

function Boutique(){
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <Genre/>

            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Boutique;