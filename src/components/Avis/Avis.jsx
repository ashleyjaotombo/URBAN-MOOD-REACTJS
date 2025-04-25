import "./Avis.css";

function Avis(){
    return (
        <>
            <h2>Avis</h2>
            <div className="avis">
                <section>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>"Livraison rapide, produit de grande qualité. Très satisfait de mon achat !"</p>
                </section>
                <section>
                    <p>⭐⭐⭐⭐</p>
                    <p>"Je recommande vivement cette marque pour l'été."</p>
                </section>
                <section>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>"Rapport qualité/prix très intéressant!"</p>
                </section>
            </div>
            <button id="btn2" value="avis">VOIR TOUS LES AVIS</button>
        </>
    )
}

export default Avis;