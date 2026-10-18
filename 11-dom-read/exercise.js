
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

export function productCount() {
  return document.querySelectorAll(".card").length;
}

export function productNames() {
  const cards = document.querySelectorAll(".card");
  return Array.from(cards).map(
    (card) => card.querySelector("h3").textContent
  );
}

export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

export function soldOutNames() {
  const cards = document.querySelectorAll(".card.sold-out");

  return Array.from(cards).map(
    (card) => card.querySelector("h3").textContent
  );
}
