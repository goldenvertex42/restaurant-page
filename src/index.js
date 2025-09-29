import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js"; 
import "./styles.css";

const homeTab = document.getElementsByClassName("home-tab").item(0);
const menuTab = document.getElementsByClassName("menu-tab").item(0);
const contactTab = document.getElementsByClassName("contact-tab").item(0);
const mainContainer = document.getElementById('content');


homeTab.addEventListener("click", function () {
    mainContainer.textContent = '';
    homePage();
});

menuTab.addEventListener("click", function () {
    mainContainer.textContent = '';
    menuPage();
});

contactTab.addEventListener("click", function () {
    mainContainer.textContent = '';
    contactPage();
});

document.addEventListener('DOMContentLoaded', homePage);