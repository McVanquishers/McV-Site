"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  setAmbiance();
}

const lightMode = $("#lightMode");

lightMode.addEventListener("click", lightMode_click);

const lightModeIcon = $("#lightModeIcon");

const about = $(".about");

let systemTheme =
  localStorage.getItem("systemTheme") === null
    ? "dark"
    : localStorage.getItem("systemTheme");

function setAmbiance() {
  if (systemTheme === "dark") {
    lightModeIcon.classList.remove("fa-moon");
    lightModeIcon.classList.add("fa-sun");
    document.body.classList.remove("bg-light");
    document.body.classList.add("bg-dark");
  } else {
    lightModeIcon.classList.remove("fa-sun");
    lightModeIcon.classList.add("fa-moon");
    document.body.classList.remove("bg-dark");
    document.body.classList.add("bg-light");
  }

  localStorage.setItem("systemTheme", systemTheme);
}

function lightMode_click() {
  systemTheme = systemTheme === "dark" ? "light" : "dark";
  setAmbiance();
}
