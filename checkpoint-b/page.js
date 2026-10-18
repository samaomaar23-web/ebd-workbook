
import { items } from "./items.js";

export function renderItems(list) {
  const productList = document.querySelector("#list");

  productList.replaceChildren();

  list.forEach((item) => {
    const card = document.createElement("li");

    card.classList.add("tile");
    card.textContent = `${item.name} - ${item.price} EGP`;

    productList.append(card);
  });
}

export function matching() {
  return items.filter((item) => item.price > 100);
}

export function start() {
  renderItems(items);

  document.querySelector("#pick").addEventListener("click", () => {
    renderItems(matching());
  });
}
