export function setHeader() {
  const header = document.querySelector(".header");

  // Populating the header
  header.innerHTML = `
    <div class="page-title">
    <h1>Games</h1>
    </div>
    <div class="page-nav">
    <nav role="navigation">
    <a href="/index.html" class="nav-link">Home</a>
    <a href="/config/pages/contact.html" class="nav-link">Contact</a>
    </nav>
    </div>`;
}

export function setHeader2() {
  const header = document.querySelector(".header");

  // Populating the header
  header.innerHTML = `
    <div class="page-title">
    </div>
    <div class="page-nav">
    <nav role="navigation">
    <a href="/index.html" class="nav-link">Home</a>
    <a href="/config/pages/contact.html" class="nav-link">Contact</a>
    </nav>
    </div>`;
}
