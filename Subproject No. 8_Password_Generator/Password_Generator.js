var copyBtn = document.getElementById("copy");

function getPassword() {
  var chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-_+={}][|`,./?;:'<>abcdefghijklmnopqrstuvwxyz0123456789";
  var passwordLength = 16;
  var password = "";
  /*Generez le mot de passe */
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  /*Affichez le mot de passe */
  
  document.getElementById("password").value = password;
  /*Changez le style du button copy */
  copyBtn.style.background = "#9E780B";
  copyBtn.style.color = "#fff";
}
/*Copiez le mot de pas */
function copyPassword() {
  var inputPassword = document.getElementById("password");
  /*Verifiez la longueur du mot de passe */
  if (inputPassword.value.length == 16) {
    /*Copiez le mot de passe */
    inputPassword.select();
    document.execCommand("copy");
    /*Changez le style du button copier */
    copyBtn.style.background = "transparent";
    copyBtn.style.color = "#000";
    /*Affichez une alert */
    alert("Password copied !");
  } else {
    /*Si non */
    alert("Please generate a password !");
  }
}
