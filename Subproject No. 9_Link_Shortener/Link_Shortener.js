let error = document.querySelector(".error_message");
let longlink = document.querySelector(".long_link");
let short = document.querySelector(".result");
let button = document.querySelector("button"); /* Select the button*/

const apiKey = "6Xy38YtXozm69PFomXXaK5QQW0BDmcZofDUxAMPen104hOvnIlH0eDRu8diK";
const url = "https://api.tinyurl.com/create";

/* Event listener to trigger shortening shortLinkFunct when the button is clicked*/
button.addEventListener("click", shortLinkFunct);

function shortLinkFunct() {
  /*Verification input */
  /* Remove leading and trailing spaces before checking if input is empty*/
  if (longlink.value.trim() !== "") {
    /*Videz l'erreur */
    error.innerHTML = "";
    /*Connection API */
    /*let url = `https://api.shrtco.de/v2/shorten?url=${longlink.value}`;*/ /*Lien API en description */ //api.shrtco.de is not available at this time

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        url: longlink.value,
        domain: "tinyurl.com",
        description: "for js tp"
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        /*Check link after receiving data*/
        if (data) {
          short.innerHTML = `<a href="${data.data.tiny_url}" target="_blank">${data.data.tiny_url}</a>`;
        } else {
          short.innerHTML = "Invalid link!";
        }
        /*Affichez le resultat */
        short.style.display = "block";
      });
  } else {
    /*error */
    error.innerHTML = "Please fill the field !";
    short.style.display = "none";
  }
}
