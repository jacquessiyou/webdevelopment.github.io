/*Definir les variables */
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var specialCharacter = document.getElementById("specialCharacter");
var length = document.getElementById("length");
/*Lorsque l'utilisateur clique sur le champ du mot passe, affichez la boite message*/
myInput.onfocus = function(){
    document.getElementById("message").style.display = "block"
}
/*Lorsque l'utilisateur clique en dehors du champ du mot de passe, masquez la boite message */
myInput.onblur = function(){
    document.getElementById("message").style.display = "none"
}
/*Lorsque l'utilisateur commence a taper quelque chose dans le champ mot de passe */
myInput.onkeyup = function(){
   /*Validez les lettres minuscules */
   var lowerCaseLetters = /[a-z]/;
   if(myInput.value.match(lowerCaseLetters)){
    /*Si le mot de passe contient une lettre minuscule, enlevez la classe "invalid et ajouter la classe valid" */
    letter.classList.remove("invalid");
    letter.classList.add("valid");
   }else {
    /*Si non, enlevez la classe "valid" et ajoutez la classe "invalid"*/
    letter.classList.remove("valid");
    letter.classList.add("invalid");
   }
   /*Validez les lettres maguscules */
   var upperCaseLetters = /[A-Z]/;
   if(myInput.value.match(upperCaseLetters)){
    /*Si le mot de passe contient une lettre maguscule, enlevez la classe "invalid et ajouter la classe valid" */
    capital.classList.remove("invalid");
    capital.classList.add("valid");
   }else {
    /*Si non, enlevez la classe "valid" et ajoutez la classe "invalid"*/
    capital.classList.remove("valid");
    capital.classList.add("invalid");
   }
    /*Validez les nombres */
    var numbers = /[0-9]/;
    if(myInput.value.match(numbers)){
     /*Si le mot de passe contient un nombre, enlevez la classe "invalid et ajouter la classe valid" */
     number.classList.remove("invalid");
     number.classList.add("valid");
    }else {
     /*Si non, enlevez la classe "valid" et ajoutez la classe "invalid"*/
     number.classList.remove("valid");
     number.classList.add("invalid");
    }
    /*Validez les caracteres speciaux */
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(myInput.value.match(specialCharacters)){
     /*Si le mot de passe contient un caractere special, enlevez la classe "invalid et ajouter la classe valid" */
     specialCharacter.classList.remove("invalid");
     specialCharacter.classList.add("valid");
    }else {
     /*Si non, enlevez la classe "valid" et ajoutez la classe "invalid"*/
     specialCharacter.classList.remove("valid");
     specialCharacter.classList.add("invalid");
    }
    /*Validez la longueur */
    if(myInput.value.length >= 8){
     /*Si le mot de passe contient au minimum 8 caracteres, enlevez la classe "invalid et ajouter la classe valid" */
     length.classList.remove("invalid");
     length.classList.add("valid");
    }else {
     /*Si non, enlevez la classe "valid" et ajoutez la classe "invalid"*/
     length.classList.remove("valid");
     length.classList.add("invalid");
    }

}