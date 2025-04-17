export default function loadMenu() {
  const content = document.querySelector("#content");

  const menuElement = document.createElement("div");

  const heading = document.createElement("h1");
  heading.innerText = "Menu";
  menuElement.appendChild(heading);

  const menuItem = document.createElement("div");
  menuItem.innerHTML = `<h1>Menu Item</h1>
  <p>Our most famous item, un poco de loco fish! Everything you can imagine and more!</p>
  <h3>300$</h3>`;
  menuElement.appendChild(menuItem);

  content.appendChild(menuElement);
}
