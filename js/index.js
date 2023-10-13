let selectedValue = null;

const dynamicText = document.querySelector("#thanks-card-dynamic-text");
const card = document.querySelector(".card");
const thanksCard = document.querySelector(".thanks-card");

document.querySelectorAll(".rating-number").forEach((item) => {
  item.addEventListener("click", (event) => {
    selectedValue = item.innerHTML;
  });
});

document.querySelector("button").addEventListener("click", () => {
  if (selectedValue) {
    card.classList.add("hide");
    thanksCard.classList.add("show");
  }
  dynamicText.innerHTML = `You selected ${selectedValue} of 5`;
});
