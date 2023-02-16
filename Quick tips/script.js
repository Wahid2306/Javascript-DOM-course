/* set interval & timeout */
// const waktu = setTimeout(() => {
//   console.log("tungguin ya 5 detik");
// }, 5000);

// const stop = document.getElementById("stop");
// stop.addEventListener("click", () => {
//   clearTimeout(waktu);
//   console.log("stop sampai disini");
// });

// tugas bikin hitungan mundur

const theDay = new Date("feb 18 2023 18:00:00").getTime();

const countDown = setInterval(() => {
  const today = new Date().getTime();
  const gap = theDay - today;

  const day = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((gap % (1000 * 60)) / 1000);

  const h1 = document.getElementById("text");
  h1.innerHTML = `Menuju Isra' Miraj : <br><br>${day} hari ${hours} jam ${minutes} menit ${second} detik`;
}, 1000);

const stop = document.getElementById("stop");
stop.addEventListener("click", () => {
  let pilihan = confirm("stop sampai disini");
  if (pilihan == true) {
    clearInterval(countDown);
  } else {
    return countDown;
  }
});
