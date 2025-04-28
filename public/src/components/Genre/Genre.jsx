import "./Genre.css";
import { Link } from 'react-router-dom';

function Genre(){
    return (
        <div className="genre">
            <section>
                <Link to="/homme" className="genre-link">
                    <img src="/Images/homme.jpg" alt="homme"/>
                    <h3>HOMMES</h3>
                </Link>
            </section>
            <section>
                <Link to="/femme" className="genre-link">
                    <img src="/Images/femme.jpg" alt="femme"/>
                    <h3>FEMMES</h3>
                </Link>
            </section>
        </div>
    );
};

export default Genre;