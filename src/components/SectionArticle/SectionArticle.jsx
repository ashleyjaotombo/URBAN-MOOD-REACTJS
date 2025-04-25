import './SectionArticle.css';
import Article from '../Article/Article';

function SectionArticle({ TabArticle, genre}) {
    return (
        <div className="articles">
            {TabArticle?.map((article) => (
                <Article genre={genre} key={article.title} article={article} />
            ))}
        </div>
    );
}

export default SectionArticle;