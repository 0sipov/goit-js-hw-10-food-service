import refs from "./refs.js";
const { menu: menuRef } = refs;

import menuItems from "../data/menu.json";

import menuTemplate from "../templates/menu.hbs";
let menuMarkup = menuTemplate(menuItems);

menuRef.innerHTML = menuMarkup;

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
let currentTheme = getThemeStorage();

if (currentTheme === Theme.DARK) {
  refs.toggleInput.checked = true;
}

toggleTheme(currentTheme);

refs.toggleInput.addEventListener("change", function () {
  let themeName = this.checked ? Theme.DARK : Theme.LIGHT;

  setThemeStorage(themeName);
  toggleTheme(themeName);
});

function addClassToBody(themeName) {
  toggleClass(refs.body, themeName);
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
