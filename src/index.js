import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

loadHome();

const content = document.querySelector("#content");
const buttonHome = document.querySelector("#home");
const buttonMenu = document.querySelector("#menu");
const buttonContact = document.querySelector("#contact");

buttonHome.addEventListener("click", () => {
  content.innerHTML = ``;
  loadHome();
});

buttonMenu.addEventListener("click", () => {
  content.innerHTML = ``;
  loadMenu();
});

buttonContact.addEventListener("click", () => {
  content.innerHTML = ``;
  loadContact();
});
