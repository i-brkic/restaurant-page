import fishImage from "./assets/fish.jpg";

export default function loadHome() {
  const content = document.querySelector("#content");

  const homeElement = document.createElement("div");

  const heading = document.createElement("h1");
  heading.innerText = "Welcome to Pescado Rabioso";
  homeElement.appendChild(heading);

  const headingSub = document.createElement("h2");
  headingSub.innerText = "Only the freshest fish!";
  homeElement.appendChild(headingSub);

  const introText = document.createElement("p");
  introText.innerText =
    "Welcome to the world of crazy fish concoctions, made with only the freshest of ingredients. Choose what you want, classics or new random meals daily - the choice is up to you! ";
  homeElement.appendChild(introText);

  const image = document.createElement("img");
  image.src = fishImage;
  image.width = "700";
  image.height = "450";
  image.alt = "fish meal";
  homeElement.appendChild(image);

  content.appendChild(homeElement);
}
