export const panier=[];


export function ajouterPanier(article){
    panier.push(article);
}

export function supprimerPanier(article){
    const index=panier.findIndex(val =>val.title === article.title && val.taille===article.taille);

    if (index!==-1){
        panier.splice(index,1);
    }
}

