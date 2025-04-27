import './SectionArticle.css';
import Article from '../Article/Article';

function SectionArticle({ TabArticle}) {
    return (
        <div className="articles">
            {TabArticle?.map((article) => (
                <Article genre={article.genre} key={article.title} article={article} />
            ))}
        </div>
    );
}

export default SectionArticle;