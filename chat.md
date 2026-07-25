``` javascript
const cards = document.querySelectorAll(".card")
const chips = document.querySelectorAll(".chip")
const searchInput = document.getElementById("search")
const stockCheckbox = document.getElementById("in-stock")

// With a search box and a checkbox joining the chips, the filters have to
// cooperate: a card should appear only if it passes ALL of them. So instead of
// each handler hiding cards on its own, they all call one function that looks
// at every filter together.

let activeCategory = "all"

// 1. Finish applyFilters. For each card, decide whether it matches the active
//    category, the search text, and the stock checkbox, then show it only if
//    it passes all three.
function applyFilters() {
  const searchText = searchInput.value.toLowerCase()
  const inStockOnly = stockCheckbox.checked

  cards.forEach((card) => {
    const matchesCategory =
      activeCategory === "all" || card.dataset.category === activeCategory

    // a. Read the card's name (the .name element's text), lowercase it, and
    //    check whether it includes searchText.
    const name = card.querySelector('.name').textContent.toLowerCase();
    const matchesSearch = name.includes(searchText);

    // b. The card matches the stock filter if the checkbox is off, or if the
    //    card's data-stock is "true".
    const matchesStock = !inStockOnly || card.dataset.stock === "true";
    // c. Show the card (remove "hidden") only when it matches category AND
    //    search AND stock. Otherwise hide it (add "hidden").
    if ()
  })
}

// 2. Each chip sets the active category, then re-runs the filters.
chips.forEach((chip) => {
  chip.addEventListener("click", (event) => {
    activeCategory = event.target.dataset.category
    applyFilters()
  })
})

// 3. Re-run the filters every time the user types in the search box.
//    Use the "input" event.

// 4. Re-run the filters every time the checkbox is toggled.
//    Use the "change" event.



