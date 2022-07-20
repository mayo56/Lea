
/**
 * 
 * @param resDB {Array<{word:string, type:string}>} réponse de la db
 * @param sortInput {string[]} input trié
 * @returns {string} réponse selon les tailles
 */
export function resAccordToSize(resDB:Array<{word:string, type:string}>, sortInput:string[]):string {
    const TailleResDB = resDB.length;
    const TailleSortInput = sortInput.length;

    if (TailleResDB < 1) return "Je ne comprends aucuns mots, apprends-les moi !";
    if (TailleResDB !== TailleSortInput) {
        const resDBWords = resDB.map(e => e.word);
        const MotsInconnue:string[] = [];
        sortInput.forEach(e => {
            if (!resDBWords.includes(e)) MotsInconnue.push(e);
        });
        console.log(MotsInconnue)
        return `je ne connais pas ces mots là:\n${MotsInconnue.join(", ")}`
    }else {
        return "huhu"
    }
}