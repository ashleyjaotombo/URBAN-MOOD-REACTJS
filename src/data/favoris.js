export const favoris=[];


export function ajouterFavoris(article){
    if (!favoris.find(fav => fav.title === article.title)){
        favoris.push(article);
    }
}

export function supprimerFavoris(article){

}

