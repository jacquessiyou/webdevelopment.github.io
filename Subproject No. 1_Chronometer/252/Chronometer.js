var sp,
  btn_start,
  btn_stop,
  t,
  ms,
  s,
  mn,
  h; /*Les variables dont on a besoins*/

/*Fonction pour initialiser les variables quand la page se charge*/
window.onload = function () {
  sp = document.getElementsByTagName("span");
  btn_start = document.getElementById("start");
  btn_stop = document.getElementById("stop");
  t;
  (ms = 0), (s = 0), (min = 0), (h = 0);
};
/* Mettre en place le compteur */
function update_chrono() {
  ms += 1;
  if (ms == 10) {
    ms = 1;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    min += 1;
  }
  if (min == 60) {
    min = 0;
    h += 1;
  }
  /*Insertion des valeurs dans les spans */
  /*[0] permet de selectionner le premier span*/
  /*[1] permet de selectionner le deuxieme span*/
  /*[n] permet de selectionner le (n+1)ieme span*/
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = min + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}

/* Mettre en place la fonction du boutton start */
function start() {
  /* Cette ligne de code execute la fonction update_chrono() tous les 100 ms */
  t = setInterval(update_chrono, 100);
  btn_start.disabled = true;
}

/*Mettre en place la fonction du boutton stop */
function stop() {
  clearInterval(t); /*Suppression de l'interval t que nous avions créé */
  btn_start.disabled = false;
}

/*Reinitialiser les valeurs du compteur */
function reset() {
  clearInterval(t);
  btn_start.disabled = false;
  (ms = 0), (s = 0), (min = 0), (h = 0);
  /*Insérer ces nouvelles valeurs dans les spans */
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = min + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
