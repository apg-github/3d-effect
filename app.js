const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const volvo = document.querySelector(".volvo img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const engines = document.querySelector(".engines");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 35;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";

  volvo.style.transform = "translateZ(200px) rotateZ(-10deg)";
  purchase.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(75px)";
  engines.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 2s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";

  title.style.transform = "translateZ(0px)";
  volvo.style.transform = "translateZ(0px) rotateZ(0deg)";
  purchase.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  engines.style.transform = "translateZ(0px)";
});
