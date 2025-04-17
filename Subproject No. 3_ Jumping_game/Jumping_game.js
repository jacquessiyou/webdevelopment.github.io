var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

function jump(){  
    /*Function pour faire sauter le personnage */
    if(perso.classList != "animation"){
        perso.classList.add("animation");
    }
    setTimeout(function(){
        perso.classList.remove("animation");
    },500)
}

/*Verifier si l'obstacle touche le  */

var verification = setInterval(function(){

    if(parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"))< 20 && parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"))> 0 && parseInt(window.getComputedStyle(perso).getPropertyValue("top"))>= 130){
        obstacles.style.animation = "none";
        alert("Vous avez perdu")

    }
},1)