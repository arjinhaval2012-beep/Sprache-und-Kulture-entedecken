// DARK MODE
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// SEARCH
const searchInput = document.querySelector(".navbar input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
