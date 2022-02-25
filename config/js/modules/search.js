export function userSearch() {
  const userInput = document.querySelector(".input");
  const clearButton = document.getElementById("clear");

  clearButton.addEventListener("click", () => {
    // 1. write a function that removes any previous results from the page
  });

  userInput.addEventListener("input", (e) => {
    let value = e.target.value;

    if (value && value.trim().length > 0) {
      value = value.trim().toLowerCase();
    } else {
      clearList();
    }
  });
}


