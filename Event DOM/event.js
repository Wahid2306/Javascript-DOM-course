// Event DOM
/* Event handler (menggantikan bila ditumpuk) */
const p2 = document.querySelector(".p2");

let ubahWarna = () => (p2.style.backgroundColor = "lightblue");

p2.onclick = ubahWarna;

const p4 = document.querySelector("section#b p");

/* addEventListener (+ menambahkan) *** used this more */
p4.addEventListener("click", () => {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const textBaru = document.createTextNode("tambah maneh");

  liBaru.append(textBaru);
  ul.append(liBaru);

  liBaru.style.background = "lightgreen";
});
