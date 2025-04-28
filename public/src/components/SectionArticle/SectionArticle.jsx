import './SectionArticle.css';
import Article from '../Article/Article';

function SectionArticle({ TabArticle, type}) {
    return (
        <div className="articles">
            {TabArticle?.map((article) => (
                <Article key={article.title} article={article} />
            ))}
        </div>
    );
}

export default SectionArticle;