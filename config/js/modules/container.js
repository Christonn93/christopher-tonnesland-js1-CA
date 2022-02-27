export function setDetails() {
  const container = document.querySelector(".container");

  container.innerHTML = `
    <div class="game-display">
    <h1>${json.title}</h1>
    <div class="ratio-box">
    <img src="${json.thumbnail}" class="image"/>
    </div>
    <article>${json.description}</article>
    </div>`;
}

export function setGameList() {
  const container = document.querySelector(".container");
}
