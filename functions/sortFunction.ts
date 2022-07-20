/**
 * Fonction de trie, garde seulement les mots dans une chaîne de caractère.
 * @param  input { string } Chaine de caractère avec des mots
 * @return { string[] } Retourne un array avec tous les mots trié (caractère spéciaux et espace enlevé )
 */
export function sortSpecialCaractere(input:string):string[] {
    const sortPhrase = input.split(/\s\W*/g)
    return sortPhrase;
}

/**
 * 
 * @param input {string[]} Demande un array pour y ajouter des '
 * @return { string[] } retourne un array avec les 
 */
export function forUseInSQLRequest(input:string[]):string[] {
    const apostropheAdd = input.map(e => {
        return (`'${e.toUpperCase()}'`)
    })
    return apostropheAdd;
}