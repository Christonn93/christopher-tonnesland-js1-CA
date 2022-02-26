// Importing header and footer
import { setHeader2 } from "./modules/header.js";
import { setFooter } from "./modules/footer.js";

// Calling in header and footer
setHeader2();
setFooter();

// Setting opp const and targeting HTML ID's
const contactInputs = {
    name: document.querySelector("#name"),
    subject: document.querySelector("#subject"),
    email: document.querySelector("#email"),
    adress: document.querySelector("#adress"),
    button: document.querySelector("button")
}

// Adding Event listener
contactInputs.addEventListener();

const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const adress = document.querySelector("#adress");
const button = document.querySelector("button");



name.addEventListener("keyup", checkButton);
subject.addEventListener("keyup", checkButton);
adress.addEventListener("keyup", checkButton);
email.addEventListener("keyup", checkButton);


// Contact form function
function contactForm(){

    
};
contactForm();