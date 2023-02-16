function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getRules(com, player) {
  if (player == com) return "SERI!";
  if (player == "gajah") return com == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return com == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return com == "orang" ? "KALAH" : "MENANG!";
}

// fungsi putar gambar
// dont forget look to .Date
function putarImg() {
  const imgPutar = document.querySelector(".img-komputer");
  const image = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }

    imgPutar.setAttribute("src", "img/" + image[i++] + ".png");

    if (i == image.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach((choice) => {
  choice.addEventListener("click", () => {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = choice.className;
    const hasil = getRules(pilihanComputer, pilihanPlayer);

    putarImg();

    setTimeout(() => {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const infoHasil = document.querySelector(".info");
      infoHasil.innerHTML = hasil;
    }, 1000);
  });
});

/*
 * Its DRY if copy paste
 * So lebih baik selection semua and looping/ forEach
 */
// const gajah = document.querySelector(".gajah");
// gajah.addEventListener("click", () => {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = gajah.className;
//   const hasil = getRules(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const infoHasil = document.querySelector(".info");
//   infoHasil.innerHTML = hasil;
// });
