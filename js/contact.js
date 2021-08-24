"use strict";

let $ = document.querySelector.bind(document);

const email = $("#email");
const message = $("#message");
const submit = $("#submit");

submit.addEventListener("click", validateInputs);

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  setAmbiance();
}

const lightMode = $("#lightMode");

lightMode.addEventListener("click", lightMode_click);

const lightModeIcon = $("#lightModeIcon");

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

function validateInputs(e) {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (email.value === "" || message.value === "") {
    alert("One or more of the fields is empty!");
    e.preventDefault();
    return;
  }

  if (re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    alert("Your email is not valid!");
    e.preventDefault();
    return;
  }
}
