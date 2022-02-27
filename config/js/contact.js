// Importing header and footer
import { setHeader2 } from "./modules/header.js";
import { setFooter } from "./modules/footer.js";

// Calling in header and footer
setHeader2();
setFooter();

// Setting the page title
document.title = 'Contact us';

// Selecting HTML elements
const form = document.querySelector("#form");
const popUp = document.querySelector(".pop-up");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameInfo");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailInfo");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressInfo");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectInfo");
const button = document.querySelector("button");

function formValidation(event) {
  event.preventDefault();

  if (lengthValidation(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "inline-flex";
  }

  if (emailValidation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "inline-flex";
  }

  if (lengthValidation(adress.value, 24) === true) {
    adressError.style.display = "none";
  } else {
    adressError.style.display = "inline-flex";
  }

  if (lengthValidation(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "inline-flex";
  }

  if (lengthValidation(fullName.value, 0) === false || lengthValidation(email.value) === false || lengthValidation(adress.value, 24) === false || lengthValidation(subject.value, 9) === false) {
    stop;
  } else {
    ifFormSubmit();
  }
}

function lengthValidation(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailPattern = regEx.test(email);
  return emailPattern;
}

function ifFormSubmit(){
    form.style.display= "none";
    popUp.style.display = "block";
    popUp.innerHTML = `<h3>Thanks for contacting us</h3>
          <p>We will get back to you shortly</p>
          <a href="../../index.html">Home</a>`;

    form.reset();  
}

form.addEventListener("submit", formValidation);
