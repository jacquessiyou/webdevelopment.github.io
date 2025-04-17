var nb1 = document.querySelector(".nb1");
var nb2 = document.querySelector(".nb2");
var op = document.querySelector(".op");
var Message = document.querySelector(".Message");
var score = document.querySelector(".score");
var link = document.querySelector(".link");
var section = document.querySelector(".section");
var compteur = 0;

/*Nombres aleatoires debut du jeu */

random1 = (Math.random() * 11) << 0; /*Pour generer des nombres entre 0 et 11 */
random2 = (Math.random() * 11) << 0; /*Pour generer des nombres entre 0 et 11 */

/*Inserer les nombres au hazard dans les variables nb1 et nb2 */
nb1.innerHTML = random1;
nb2.innerHTML = random2;
/*Function de verification */
function verifier() {
  /*Recuperer le resultat entre par le joueur */
  var res = document.querySelector(".res").value;
  if (random1 + random2 == res) {
    Message.style.background = "green";
    Message.innerHTML = "Correct.";
    /*Creer d'autres nombres aleatoires */
    /*Nombres aleatoires debut du jeu */

    random1 =
      (Math.random() * 11) << 0; /*Pour generer des nombres entre 0 et 11 */
    random2 =
      (Math.random() * 11) << 0; /*Pour generer des nombres entre 0 et 11 */
    /*Inserer les nombres au hazard dans les variables nb1 et nb2 */
    nb1.innerHTML = random1;
    nb2.innerHTML = random2;
    compteur = compteur + 1;
    /*Function de verification */
  } else {
    section.style.display = "none";
    Message.style.background = "red";
    Message.innerHTML = "You have lost.";
    score.innerHTML = `<span>${compteur}</span></br> Score`; /*Attention! Ce signe est donne par la combinaison "ALTGR + 7 alphanumerire"*/
    link.style.display = "block";
  }
}
