import "./MeilleuresVentes.css";

function MeilleuresVentes(){
    return (
        <>
            <h2>Meilleures ventes</h2>

            <div className="vente">
                <section>
                    <img src="/Images/Femme/pull12.jpg" alt="pull"/>
                    <h4>Pull sweater</h4><br/>
                    <h4>20€</h4>
                    <button value="ajouter">AJOUTER AU PANIER</button>
                </section>

                <section>
                    <img src="/Images/Homme/accessoire5.jpg" alt="chaussure"/>
                    <h4>Pull sweater</h4><br/>
                    <h4>20€</h4>
                    <button value="ajouter">AJOUTER AU PANIER</button>
                </section>

                <section>
                    <img src="/Images/Femme/pantalon2.jpg" alt="pantalon"/>
                    <h4>Pull sweater</h4><br/>
                    <h4>20€</h4>
                    <button value="ajouter">AJOUTER AU PANIER</button>
                </section>

                <section>
                    <img src="/Images/Homme/accessoire6.jpg" alt="lunette"/>
                    <h4>Pull sweater</h4><br/>
                    <h4>20€</h4>
                    <button value="ajouter">AJOUTER AU PANIER</button>
                </section>
            </div>
        </>
    );
};

export default MeilleuresVentes;