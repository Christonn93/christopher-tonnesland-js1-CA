import { setHeader } from "./modules/header.js";
import { setFooter } from "./modules/footer.js";
import { displayError } from "./modules/error.js";

// Setting the page title
document.title = "Home Page";

// Declaring and setting the loading for the page
const loading = document.querySelector(".loading");
loading.innerHTML = `
<div class="loading">
<h2>Your games is loading</h2>
<svg viewBox="-2000 -1000 4000 2000">
<path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
<use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use></svg>
</div>`;

// Api call
const cors = "https://noroffcors.herokuapp.com/";
const API_url = `https://www.mmobomb.com/api1/games`;

const API = cors + API_url;

setHeader();

// API call function
async function API_call() {
  try {
    //Declaring the call and response to the API
    const call = await fetch(API);
    const json = await call.json();
    console.log(json);

    // Declaring const for the function
    const container = document.querySelector(".container");

    for (let i = 0; i < json.length; i++) {
      // Declaring const for populating the HTML
      const game_id = json[i].id;
      const game_title = json[i].title;
      const game_image = json[i].thumbnail;
      const game_genre = json[i].genre;

      // Reducing the array from 400 to 74
      if (i === 100) {
        break;
      }

      // Removing the loading animation
      loading.innerHTML = ``;

      // Displaying API result in the HTML
      container.innerHTML += `
        <a href="./config/pages/details.html?id=${game_id}" class="image-link" id="${game_genre}">
        <div class="game-card">
        <div class="ratio-box">
        <img src="${game_image}" class="image"/>
        </div>
        <div class="card-info">
        <p>${game_title}</p>
        <p>Genre: ${game_genre}</p>
        </div>
        </div>
        </a>`;
    }
  } catch (error) {
    // Removing the loading animation
    loading.innerHTML = ``;
    console.log(error);
    displayError();
  }
}

API_call();

setFooter();
