// Selecting HTML elements
const header = document.querySelector(".header");
// Populating the header
header.innerHTML = `<nav>
<a href="/index.html" class="nav-link">Home</a>
<a href="/config/pages/contact.html" class="nav-link">Contact</a>
</nav>`;
const main = document.querySelector(".main");
const container = document.querySelector(".details-container");
container.innerHTML = "";
const footer = document.querySelector(".footer");
