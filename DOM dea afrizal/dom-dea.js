// document.title = "uhuy euy";
// const body = document.body;
// body.append("HELLO WORLD");

// const h1 = document.createElement("h1");
// h1.textContent = "INI LEWAT JAVASCRIPT BRO";

// body.append(h1);

// selection method
const btn1 = document.getElementById("btn1");

const isiButton = "KLik sini 1";
btn1.textContent = isiButton;

btn1.style.background = "lightgreen";
btn1.style.fontSize = "25px";
function gantiWarna() {
  btn1.style.background = "salmon";
  btn1.style.border = "none";
  btn1.style.fontSize = "35px";
}

function gantiText() {
  btn1.textContent = "Sini kau";
}

function oriText() {
  btn1.textContent = isiButton;
  btn1.style.background = "lightgreen";
  btn1.style.fontSize = "25px";
}

/* TUGAS BY DEA AFRIZAL ✔
 *membuat btn2 ketika di mouseover keluar kata with namamu
 *ketika mouse out ganti warna kata yang muncul
 */
const body = document.body;
const btn2 = document.querySelector(".btn2");
const nama = document.createElement("h1");
nama.textContent = "Lana Its Here";

function munculNama() {
  body.append(nama);

  nama.style.color = "yellow";
}

function outColor() {
  nama.style.color = "salmon";
}
