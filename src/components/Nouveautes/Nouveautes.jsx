import "./Nouveautes.css";

function Nouveautes(){
    return (
        <>
            <h2>Nouveautés</h2>
            <div className="nouveaute">
                <section>
                    <img src="/Images/Homme/tshirt2.jpg" alt="pantalon"/>
                    <h4>Pull sweater</h4><br/>
                    <h4>20€</h4>
                    <button value="ajouter">AJOUTER AU PANIER</button>
                </section>
                <section>
                    <img src="/Images/Femme/pantalon4.jpg" alt="pantalon"/>
                    <h4>Pull sweater</h4><br/>
                    <h4>20€</h4>
                    <button value="ajouter">AJOUTER AU PANIER</button>
                </section>
                <section>
                    <img src="/Images/Homme/sweat1.jpg" alt="sweat"/>
                    <h4>Pull sweater</h4><br/>
                    <h4>20€</h4>
                    <button value="ajouter">AJOUTER AU PANIER</button>
                </section>
                <section>
                    <img src="/Images/Femme/lunette1.jpg" alt="lunette"/>
                    <h4>Pull sweater</h4><br/>
                    <h4>20€</h4>
                    <button value="ajouter">AJOUTER AU PANIER</button>
                </section>

            </div>
        </>
    );
};

export default Nouveautes;