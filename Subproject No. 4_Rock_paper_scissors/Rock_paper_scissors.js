const contenantChoixOrdinateur = document.getElementById("choix-ordinateur");
const contenantChoixUtilisateur = document.getElementById("choix-utilisateur");
const contenantResultat = document.getElementById("resultat");

const choixPossibles = document.querySelectorAll("button");

let choixUtilisateur
let resultat
let choixOrdinateur

/*Evenement "Click sur les buttons" */
choixPossibles.forEach(choixPossible => choixPossible.addEventListener("click", (event)=>{
    /*Recuperation de l'ID du button clique */
    choixUtilisateur = event.target.id;
    /*On ajoute l'image qui correspond au choix */
    console.log(choixUtilisateur);
    
    contenantChoixUtilisateur.innerHTML = `<img src=${choixUtilisateur}.png>`
    generer_choix_ordinateur();
    verification()
}))


/*Function pour generer le choixde l'ordinateur */
function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) +1 /*Generer des nombres compris entre 1 et 3 */
    if(random === 1){ /*si random = a 1 */
    choixOrdinateur = "Rock"
    }
    if(random === 2){ /*si random = a 2 */
        choixOrdinateur = "Paper"
    }
    if(random === 3){ /*si random = a 3 */
        choixOrdinateur = "Scissors"
    }
    /*On ajoute l'image qui correspond au choix */
    contenantChoixOrdinateur.innerHTML = `<img src=${choixOrdinateur}.png>`
}

/*Function pour verifier si le joueur a gagné ou pas */

function verification(){
    /*Player draws */
    if(choixUtilisateur == choixOrdinateur){
        resultat = "Draw!";
    }
    /*Player losses */
    if(choixUtilisateur == "Rock" && choixOrdinateur == "Paper"){
        resultat = "Lost!";
    }
    if(choixUtilisateur == "Paper" && choixOrdinateur == "Scissors"){
        resultat = "Lost!";
    }
    if(choixUtilisateur == "Scissors" && choixOrdinateur == "Rock"){
        resultat = "Lost!";
    }
    /*Player wins */
    if(choixUtilisateur == "Scissors" && choixOrdinateur == "Paper"){
        resultat = "Win!";
    }
    if(choixUtilisateur == "Paper" && choixOrdinateur == "Rock"){
        resultat = "Win!";
    }
    if(choixUtilisateur == "Rock" && choixOrdinateur == "Scissors"){
        resultat = "Win!";
    }
    contenantResultat.innerHTML = resultat;
}
