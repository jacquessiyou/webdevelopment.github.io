var button_code_bar = document.getElementById("button_code_bar");
var text = document.getElementById("text");
var box = document.getElementById("box");
var pdf_box = document.getElementById("pdf_box");

button_code_bar.addEventListener("click", function () {
    
  if (text.value.length > 0) {
    if (text.value.length < 50) {
      /*Generez le code bar */
      box.innerHTML = "<svg id='barcode'></svg>";
      JsBarcode("#barcode", text.value);
      box.style.border = "1px solid #999";
      /*Creez un button pour telecharger le barcode */
      pdf_box.innerHTML =
        `<button onclick ="genererPDF()">Download the barcode</button>`;
      /*Stylisez la boite du button pdf */
      pdf_box.style.marginTop = "10px";
      pdf_box.style.document = "flex";
    } else {
      box.style.border = "0";
      box.innerHTML = "<p class ='error'>The text is long !</p>";
      pdf_box.style.display = `none`;
    }
  } else {
    box.style.border = "0";
    box.innerHTML = "<p class ='error'>Fill the space !</p>";
    pdf_box.style.display = "none";
  }
});

/*Generer le pdf */
function genererPDF() {
  var opt = {
    margin: 1,
    filename: `${text.value}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a6", orientation: "l" },
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(box).save();

  // Old monolithic-style usage:
  //html2pdf(box, opt);
}
