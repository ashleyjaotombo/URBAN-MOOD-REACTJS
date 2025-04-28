export const favoris=[];


export function ajouterFavoris(article) {
    const index = favoris.findIndex(fav => fav.title === article.title);

    if (index === -1) {
        favoris.push(article);
    } else {
        favoris.splice(index, 1);
    }
}

export function estFavori(article) {
    return favoris.some(fav => fav.title === article.title);
}


