import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Categories/Categories";
import PanneauRecherche from "../components/PanneauRecherche/PanneauRecherche";
import Footer from "../components/Footer/Footer";
import AffichageArticle from "../components/AffichageArticle/AffichageArticle";

function ArticleScreen() {
    const location = useLocation();
    const article = location.state;

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <PanneauRecherche />
                <Categories genre="homme"/>
                <AffichageArticle article={article} />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default ArticleScreen;