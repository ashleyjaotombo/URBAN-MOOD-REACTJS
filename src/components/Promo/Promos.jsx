import "./Promos.css";

function Promos(){
    return (
        <section className="plan">
            <img className="accueilIMG" src="/Images/accueil.jpg" alt="Image d'accueil"/>

            <div className="promo">
                <h4>VENTE PROMOTIONNELLE</h4>
                <h3>Jusqu'à 50% de réduction</h3>
                <input id="btn1" type="button" value="ACHETER MAINTENANT"/>
            </div>
        </section>
        );
        };

export default Promos;