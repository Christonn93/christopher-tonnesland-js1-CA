export function loading(){
    // Declaring and setting the loading for the page
const loading = document.querySelector(".loading");
loading.innerHTML = `
<div class="loading">
<h2>Your game is loading</h2>
<svg viewBox="-2000 -1000 4000 2000">
<path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
<use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use></svg>
</div>`;
};