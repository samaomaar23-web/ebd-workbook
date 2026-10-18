
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");
  list.replaceChildren();

  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceText = document.createElement("p");
    priceText.classList.add("price");
    priceText.textContent = `${item.price} EGP`;

    card.append(heading, priceText);
    list.append(card);
  });
}

const items = [];

export function wireForm() {
  const form = document.querySelector("#product-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const product = readForm();
    const error = document.querySelector("#error");
    const priceInput = document.querySelector("#price");

    if (!product.name) {
      error.textContent = "Give the product a name.";
      return;
    }

    if (
      priceInput.value.trim() === "" ||
      !Number.isFinite(product.price) ||
      product.price <= 0
    ) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push(product);
    renderList(items);
    clearForm();
  });
}
