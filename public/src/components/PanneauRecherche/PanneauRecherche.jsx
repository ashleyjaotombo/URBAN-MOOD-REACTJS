import './PanneauRecherche.css';

function PanneauRecherche(){
    return (
        <div id="panneauRecherche">
            <button id="closeRecherche">×</button>
            <h2>Recherche</h2>
            <input type="text" placeholder="Que recherchez-vous" id="saisieRecherche"/>
        </div>
    )
}

export default PanneauRecherche;