export default function loadContact() {
  const content = document.querySelector("#content");

  const loadElement = document.createElement("div");

  const heading = document.createElement("h1");
  heading.innerText = "Contact";
  loadElement.appendChild(heading);

  const contactText = document.createElement("p");
  contactText.innerText =
    "Here you can contact us and ask anything you like! - pescado.rabioso@gmail.com";
  loadElement.appendChild(contactText);

  content.appendChild(loadElement);
}
