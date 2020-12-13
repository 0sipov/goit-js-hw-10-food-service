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

let currentTheme = getThemeStorage();

if (currentTheme === Theme.DARK) {
  toggleInputRef.checked = true;
}

toggleTheme(currentTheme);

toggleInputRef.addEventListener("change", function () {
  let themeName = this.checked ? Theme.DARK : Theme.LIGHT;

  setThemeStorage(themeName);
  toggleTheme(themeName);
});

function addClassToBody(themeName) {
  toggleClass(bodyRef, themeName);
}

function getThemeStorage() {
  return localStorage.getItem("theme");
}

function setThemeStorage(themeName) {
  localStorage.setItem("theme", themeName);
}

function toggleTheme(themeName) {
  addClassToBody(themeName);
}

function toggleClass(elem, currentClass) {
  elem.className = "";
  elem.classList.add(currentClass);
}
