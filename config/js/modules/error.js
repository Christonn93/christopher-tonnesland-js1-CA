export function displayError() {
  // Declaring const for the function
  const error_container = document.querySelector(".error");

  error_container.innerHTML = `
    <div class="error-container">
        <h2 class="warning">Oh no. Something is wrong</h2>
        <p class="warning">Please try to refresh the page. If the error keeps returning contact support <a href="./config/pages/contact.html">here</a></p>
    </div>
    `;
}
