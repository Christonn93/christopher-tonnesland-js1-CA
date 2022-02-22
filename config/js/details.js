// Selecting HTML elements
const header = document.querySelector(".header");
header.innerHTML = "";
const main = document.querySelector(".main");
const container = document.querySelector(".container");
container.innerHTML = "";
const footer = document.querySelector(".footer");

// Setting new param
const params = new URLSearchParams(window.location.href);

// Api call
const cors = "https://noroffcors.herokuapp.com/";
const API_url = `https://openlibrary.org/` +params;

const API = cors + API_url;

async function API_call() {
  try {

    //Declaring the call and response to the API 
    const call = await fetch(API);
    const json = await call.json();
    const bookDetail = json.works;

    for (let i = 0; i < bookDetail.length; i++){

    // Declaring book information
    const bookAuthor = bookDetail[i].authors[0].name;
    const bookTitle = bookDetail[i].title;
    const bookID = bookDetail[i].key;

    // API call for the book cover
    const bookIsbn = bookDetail[i].availability.isbn;
    const size = `L`;
    const noImageFound = 'https://via.placeholder.com/500x500?text=Image+not+found';
    const bookImg = `https://covers.openlibrary.org/b/isbn/${bookIsbn}-${size}.jpg`  || noImageFound;
    
    // Populating the header
    header.innerHTML = `<h1>${json.name}</h1>`;

    // Populating the container with books    
    container.innerHTML += ``;
    }

    console.log(json.works);
   
  } catch (error) {
    console.log(error);
  }
}

API_call();
