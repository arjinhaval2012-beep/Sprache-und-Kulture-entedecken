// DARK MODE TOGGLE
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// SIMPLE SEARCH FUNCTION
const searchInput = document.querySelector(".navbar input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {
  let value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    let text = card.textContent.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
