import refs from "./refs.js";
const { menu: menuRef, body: bodyRef, toggleInput: toggleInputRef } = refs;

import menuItems from "../data/menu.json";

import menuTemplate from "../templates/menu.hbs";
// Call hbs function that returns the finished markup
let menuMarkup = menuTemplate(menuItems);
// Adds menu markup to the page
menuRef.innerHTML = menuMarkup;

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

let currentTheme = localStorage.getItem("theme");

if (currentTheme === Theme.DARK) {
  toggleInputRef.checked = true;
}

addClassToBody(localStorage.getItem("theme"));

toggleInputRef.addEventListener("change", function () {
  let themeName = this.checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem("theme", themeName);
  addClassToBody(themeName);
});

function addClassToBody(themeName) {
  if (currentTheme === "light-theme" || "dark-theme") {
    toggleClass(bodyRef, themeName);
  } else {
    themeName = "light-theme";
  }
}
function toggleClass(elem, currentClass) {
  elem.className = "";
  elem.classList.add(currentClass);
}
