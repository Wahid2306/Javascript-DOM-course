// with X hilangkan card
// problem is just only one item not banyak
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", () => {
//   card.remove("close");
// });

/*  ==============
    DOM Traversal 
    * preventDefault
    * Event bubbling ↕ go to wadah/induk
    ==============*/
// ! parentElement. inilah e.g DOM traversalnya
// ! menghentikan perilaku default e.g : <a>

const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", (e) => {
//     // close[i].parentElement.remove("close");
//     e.target.parentElement.remove("close");
//   });
// }

// close.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.target.parentElement.remove("close");
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const card = document.querySelectorAll(".card");
// card.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     alert("okooko");
//   });
// });

const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    e.target.parentElement.remove("close");
    e.preventDefault();
  }
});
