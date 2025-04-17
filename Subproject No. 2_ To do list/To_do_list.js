var addToDoButton = document.getElementById("addToDo");
var ToDocontainer = document.getElementById("ToDocontainer");
var inputField = document.getElementById("inputField");

addToDoButton.onclick = function(){
   /*Verifier si l'input n'est vide */
    if(inputField.value != ""){
   /*Si l'input n'est pas vide, creer un paragraphe */
   var paragraphe = document.createElement("p")
    }
    /*Valorisez ce paragraphe avec le contenu de l'input */
    paragraphe.innerText = inputField.value;
    /*Stylisez le paragraphe */
    paragraphe.classList.add("paragraphe_style")
    /*Inserez le paragraphe dans l'element ToDocontainer */
    ToDocontainer.appendChild(paragraphe);
    /*Videz l'input quand le paragraphe est ajoute */
    inputField.value = "";
    /* Barrez le paragraphe quand on clique dessus*/
    paragraphe.addEventListener("click", function(){
        paragraphe.classList.add("paragraphe_click")
    })
    /*Supprimez la tache quand on double clique sur la tache */
    paragraphe.addEventListener("dblclick", function(){
        ToDocontainer.removeChild(paragraphe);
    })
}
