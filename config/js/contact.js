// Importing header and footer
import { setHeader2 } from "./modules/header.js";
import { setFooter } from "./modules/footer.js";

// Calling in header and footer
setHeader2();
setFooter();

// Setting the page title
document.title = "Contact us";

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

// Function to validate inputs in contact form
function lengthValidation(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// Function to validate email input in contact form
function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailPattern = regEx.test(email);
  return emailPattern;
}

// Function to create a case number
function caseNumber(length) {
  const randomNumLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += randomNumLet.charAt(Math.floor(Math.random() * randomNumLet.length));
  }

  return result;
}

// Function to validate the contact form
function formValidation(event) {
  event.preventDefault();

  try {
    if (lengthValidation(fullName.value, 0)) {
      fullNameError.style.display = "none";
    } else {
      fullNameError.style.display = "inline-flex";
    }

    if (emailValidation(email.value)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "inline-flex";
    }

    if (lengthValidation(adress.value, 24)) {
      adressError.style.display = "none";
    } else {
      adressError.style.display = "inline-flex";
    }

    if (lengthValidation(subject.value, 9)) {
      subjectError.style.display = "none";
    } else {
      subjectError.style.display = "inline-flex";
    }
    if (lengthValidation(fullName.value, 0) && emailValidation(email.value) && lengthValidation(adress.value, 24) && lengthValidation(subject.value, 9)) {
      form.style.display = "none";
      popUp.style.display = "flex";
      popUp.innerHTML = `<div>
      <h1>Thanks for contacting us</h1>
      <p>We will get back to you shortly</p>
      <p>Your case number is ${caseNumber(5)}</p>
      <a href="../../index.html">Home</a>
      </div>`;

      form.reset();
    } else {
      return;
    }
  } catch (error) {
    displayError();
  }
}

form.addEventListener("submit", formValidation);
