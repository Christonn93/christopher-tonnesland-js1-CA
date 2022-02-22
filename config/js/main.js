// Selecting HTML elements
const header = document.querySelector(".header");
header.innerHTML = "";
const main = document.querySelector(".main");
const container = document.querySelector(".container");
container.innerHTML = "";
const footer = document.querySelector(".footer");

// Api call
const cors = "https://noroffcors.herokuapp.com/";
const API_url = `https://openlibrary.org/subjects/computer_science.json`;

const API = cors + API_url;

async function API_call() {
  try {

    //Declaring the call and response to the API 
    const call = await fetch(API);
    const json = await call.json();
    const bookArray = json.works;

    for (let i = 0; i < bookArray.length; i++){

    // Declaring book information
    const bookAuthor = bookArray[i].authors[0].name;
    const bookTitle = bookArray[i].title;
    const bookID = bookArray[i].key;

    // API call for the book cover
    const bookIsbn = bookArray[i].availability.isbn;
    const size = `L`;
    const noImageFound = 'https://via.placeholder.com/500x500?text=Image+not+found';
    const bookImg = `https://covers.openlibrary.org/b/isbn/${bookIsbn}-${size}.jpg`  || noImageFound;
    
    // Populating the header
    header.innerHTML = `<h1>${json.name}</h1>`;

    // Populating the container with books
    container.innerHTML += `<div class="book-container">
    <img src="${bookImg}" />
    <div class="book-header">
    <h2>${bookTitle}</h2>
    <p>Author: ${bookAuthor}</p>
    </div>
    <div class="book-footer">
    <a href="../config/pages/details.html?${bookID}" class="cta">Read more</a>
    </div>
    </div>`;
    }

    console.log(json.works);
   
  } catch (error) {
    console.log("error", error);
  }
}

API_call();
