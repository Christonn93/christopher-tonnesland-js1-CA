import { setHeader } from "./modules/header.js";
import { setFooter } from "./modules/footer.js";
import { displayError } from "./modules/error.js"

// Selecting HTML elements
const container = document.querySelector(".container");

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

    for (let i = 0; i < json.length; i++){

        // Reducing the array from 400 to 74
        if (i === 74){
            break;
        }

        const game_id = json[i].id;
        const game_image = json[i].thumbnail;

        container.innerHTML += `
        <a href="./config/pages/details.html?id=${game_id}" class="game-card">
        <img src="${game_image}"/>
        </a>`;
        
    }

  } catch (error) {
    console.log(error);
    displayError();
  }
}

API_call();

setFooter();