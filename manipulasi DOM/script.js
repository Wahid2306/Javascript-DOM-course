/* manipulasi DOM 1 */

const judul = document.getElementById("judul");
judul.innerHTML = "M. Wahid Maulana";
judul.style.color = "orange";

judul.setAttribute("nama", "lana");

const p3 = document.querySelector(".p3");

/* Manipulasi DOM 2 */

//  buat element baru <append>
const pBaru = document.createElement("p");
const textBaru = document.createTextNode("ahay dek");
// gabungkan atau hubungkan ====== diakhir ======
pBaru.append(textBaru);
// simpan pBaru di section a atau induknya
const wadahInduk = document.getElementById("a");
wadahInduk.append(pBaru);

// merubah di tengah <insertBefore>
const liBaru = document.createElement("li");
const liText = document.createTextNode("item baru nich");
liBaru.append(liText);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
// use 2 parameter ('node baru yang akan masuk','baris patokannya')
ul.insertBefore(liBaru, li2);

// remove
const link = document.getElementsByTagName("a")[0];

wadahInduk.removeChild(link);

// replace
const b = document.getElementById("b");
const p4 = b.querySelector("p");

const h2 = document.createElement("h2");
const h2Text = document.createTextNode("gua ganti paragraphnya uhuy");

h2.append(h2Text);
// 2 parameter ('node baru','node lama')
b.replaceChild(h2, p4);

pBaru.style.background = "lightgreen";
liBaru.style.background = "lightgreen";
h2.style.background = "lightgreen";
