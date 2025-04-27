import AffichageArticle from "../components/AffichageArticle/AffichageArticle";
import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Categories/Categories";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import Footer from "../components/Footer/Footer";
import { useLocation } from 'react-router-dom';

function ArticleScreen() {
    const location = useLocation();
    const { article, genre } = location.state;
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PanneauRecherche/>
                <Categories genre="homme"/>
                <AffichageArticle genre={genre} article={article}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}
export default ArticleScreen;