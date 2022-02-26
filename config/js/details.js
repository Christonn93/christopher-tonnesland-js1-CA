import { setHeader2 } from "./modules/header.js";
import { setFooter } from "./modules/footer.js";
import { displayError } from "./modules/error.js";

// Declaring and setting the loading for the page
const loading = document.querySelector(".loading");
loading.innerHTML = `
<div class="loading">
<h2>Your game is loading</h2>
<svg viewBox="-2000 -1000 4000 2000">
<path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
<use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use></svg>
</div>`;

// Api call
const newUrl = document.location.search;
const URL_params = new URLSearchParams(newUrl);
const URL_id = URL_params.get("id");

const cors = "https://noroffcors.herokuapp.com/";
const details_API = `https://www.mmobomb.com/api1/game?id=` + URL_id;

const API = cors + details_API;

// API call function
async function API_call() {
  try {
    setHeader2();

    //Declaring the call and response to the API
    const call = await fetch(API);
    const json = await call.json();
    console.log(json);

    // Declaring const for the function
    const container = document.querySelector(".game-container");
    const noInfo = "We dont have this info.";
    const missingImage = "https://via.placeholder.com/500x500?text=Image+not+found";

    // Setting the page title
    document.title = `Game: ` + json.title;

    // Removing the loading animation
    loading.innerHTML = ``;

    // Displaying API result in the HTML
    container.innerHTML = `<div class="game-display">
    <div class="game-header">
    <h1>${json.title}</h1>
    </div>
    <div class="game-image">
    <div class="ratio-box">
      <img src="${json.thumbnail}" class="image"/>
      </div>
    </div>
    <div class="image-gallery">
        <div class="ratio-box">
          <img src="${json.screenshots[0].image || missingImage}" class="image"/>
        </div>
        <div class="ratio-box">
          <img src="${json.screenshots[1].image || missingImage}" class="image"/>
        </div>
        <div class="ratio-box">
          <img src="${json.screenshots[2].image || missingImage}" class="image"/>
        </div>
      </div>
    <div class="game-description">
    <article>${json.description}</article>
    </div>
    <div class="system-requirements">
    <table>
          <thead>
            <h4>System Requirements</h4>
          </thead>
          <tbody>
              <tr>
                  <td>Operating system:</td>
                  <td>${json.minimum_system_requirements.os || noInfo}</td>
              </tr>
              <tr>
                  <td>CPU:</td>
                  <td>${json.minimum_system_requirements.processor || noInfo}</td>
              </tr>
              <tr>
                  <td>GPU:</td>
                  <td>${json.minimum_system_requirements.graphics || noInfo}</td>
              </tr>
              <tr>
                  <td>RAM:</td>
                  <td>${json.minimum_system_requirements.memory || noInfo}</td>
              </tr>
              <tr>
                  <td>Storage:</td>
                  <td>${json.minimum_system_requirements.storage || noInfo}</td>
              </tr>
          </tbody>
      </table>
    </div>
    <div class="publisher">
    <table>
    <thead>
      <h4>Other game details</h4>
    </thead>
    <tbody>
        <tr>
            <td>Developer:</td>
            <td>${json.developer || noInfo}</td>
        </tr>
        <tr>
            <td>Publisher:</td>
            <td>${json.publisher || noInfo}</td>
        </tr>
        <tr>
            <td>Release date:</td>
            <td>${json.release_date || noInfo}</td>
        </tr>
        <tr>
            <td>Platform:</td>
            <td>${json.platform || noInfo}</td>
        </tr>
        <tr>
            <td>Genre:</td>
            <td>${json.genre || noInfo}</td>
        </tr>
    </tbody>
</table>
    </div>
  </div>`;
  } catch (error) {
   // Removing the loading animation
   loading.innerHTML = ``;
   console.log(error);
   displayError();
  }
}

API_call();

setFooter();
