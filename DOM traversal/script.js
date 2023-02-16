// with X hilangkan card
// problem is just only one item not banyak
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", () => {
//   card.remove("close");
// });

/*  ==============
    DOM Traversal 
    ==============*/
// parentElement inilah DOM traversalnya
const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", (e) => {
//     // close[i].parentElement.remove("close");
//     e.target.parentElement.remove("close");
//   });
// }

close.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.parentElement.remove("close");
  });
});
