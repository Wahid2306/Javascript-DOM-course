const container = document.querySelector(".container");
const imgJumbo = document.querySelector(".jumbo");

container.addEventListener("click", (e) => {
  if (e.target.className == "thumb") {
    imgJumbo.src = e.target.src;
  }
});
