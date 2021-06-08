const text = document.querySelector("#text");
const container = document.querySelector(".container");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

setInterval(() => {
  text.innerHTML = "Site Back!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Relax";

    setTimeout(() => {
      text.innerText = "Enjoy the Show!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}, totalTime);
