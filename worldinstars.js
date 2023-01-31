/**
 * Fonction principale qui appelle les autres fonctions
 */
function main() {
    //1-Prompt the user for several words (separated by commas).
    let words;
    do {
        words = prompt("Entrez des mots séparés par ','");
    } while (words == null || !isNaN(words));
    //test: words = "manger, parler, organisation, parlement, , , , ";

    //2-Put the words into an array.
    let wordsArray = words.split(",");
    let longestWord = getLongestWord(wordsArray);

    //Constitution du pattern à afficher
    let pattern = dessineEtoile('', longestWord) + "\n";
    for (const word of wordsArray) {
        if (word.trim() != "") {
            pattern += dessineEtoile(word.trim(), longestWord) + "\n";
        }
    }
    pattern += dessineEtoile('', longestWord);
    
    //3-Console.log the words one per line, in a rectangular frame as seen below.
    console.log(pattern);
}

//Exécution
main();

/**
 * Recherche le plus long mot dans un tableau de chaines et retourne la longueur de ce mot
 * @param wordsArray : Le tableau de mots 
 * @returns longestWord: La longueur du plus long mot
 */
function getLongestWord(wordsArray) {
    let cutSizeLongestWord = 0
    for (const word of wordsArray) {
        if (word.length > cutSizeLongestWord) {
            cutSizeLongestWord = word.length;
        }
    }

    return cutSizeLongestWord;
}

/**
 * Imprime le mot passé en paramètre en fonction du pattern donné
 * @param word 
 * @param taillePlusLongMot
 * @returns pattern: La sortie correspondante au mot entré en fonction du pattern
 */
function dessineEtoile(word, taillePlusLongMot) {
    
    let pattern = "";
    //Si mot est vide, on dessine une ligne complète d'etoile(*)
    if (word.trim() == '') {
        pattern += "**";
        for (let i = 0; i < taillePlusLongMot; i++) {
            pattern += "*";
        }
        pattern += "**";
    } else {
        //Calcul de la différence entre la longueur du plus long mot
        //et la longueur du mot actuel, la différence sera remplacé par un espace vide
        //pour le formatage
        let difTaille = taillePlusLongMot - word.length;

        pattern += "* " + word; //Marge de gauche
        for (let i = 0; i < difTaille; i++) {
            pattern += " ";
        }
        pattern += " *"; //Marge de droite
    }

    return pattern;
}