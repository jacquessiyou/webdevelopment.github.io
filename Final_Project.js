const projets = document.querySelectorAll(".nav .project a");
const main = document.getElementById("main");
const photo = document.querySelector(".head img");

photo.addEventListener("click", function () {
  location.reload();
});

projets.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    main.innerHTML = "";
    main.innerHTML = `<iframe src="${element.href}" width="100%" height="100%"></iframe>`;
  });
});

