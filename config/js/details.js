import { setHeader2 } from "./modules/header.js";
import { setFooter } from "./modules/footer.js";

// Selecting HTML elements
const container = document.querySelector(".game-container");


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
    //Declaring the call and response to the API
    const call = await fetch(API);
    const json = await call.json();
    console.log(json);

    setHeader2();

    container.innerHTML = `
    <div class="game-display">
    <div class="game-title">
    <h1>${json.title}</h1>
    </div>
    <div class="left-side">
    <div class="ratio-box">
    <img src="${json.thumbnail}" class="image"/>
    </div>
    <ul>
    <li>Developer: ${json.developer}</li>
    <li>Publisher: ${json.publisher}</li>
    </ul>
    </div>
    <div class="right-side">
    <div>
    <article>${json.description}</article>
    </div>
    </div>`;
  } catch (error) {
    console.log("error", error);
  }
}

API_call();

setFooter();
