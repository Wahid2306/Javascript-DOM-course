/*  ===================
    CASE 1 :
    * membuat toggle btn 
    ===================*/
const btnColor = document.getElementById("color");

btnColor.addEventListener("click", () => {
  //   document.body.style.backgroundColor = "#FFB703";
  document.body.classList.toggle("color-default");
});

/*  ===================
    CASE 2 :
    * membuat btn baru 
    ===================*/
const tombol2 = document.createElement("button");
const textTombol = document.createTextNode("acak warna");
tombol2.append(textTombol);
tombol2.setAttribute("type", "button");
btnColor.after(tombol2);

tombol2.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r, g, b);
  document.body.style.background = `rgb( ${r} , ${g} , ${b} )`;
});

/*  ===================
    CASE 3 :
    * membuat slider
    ===================*/
const sRed = document.querySelector("input[name=sRed]");
const sGreen = document.querySelector("input[name=sGreen]");
const sBlue = document.querySelector("input[name=sBlue]");

sRed.addEventListener("input", () => {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.background = `rgb( ${r} , ${g}, ${b} )`;
});

sGreen.addEventListener("input", () => {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.background = `rgb( ${r} , ${g}, ${b} )`;
});

sBlue.addEventListener("input", () => {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.background = `rgb( ${r} , ${g}, ${b} )`;
});

document.body.addEventListener("mousemove", (event) => {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerWidth) * 255);

  document.body.style.background = `rgb( ${xPos} , ${yPos}, 100 )`;
});

// PR by myself ***make it more simple its a lot traffic and DRY ==================
