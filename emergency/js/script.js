"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/** @@@@@@@@@@@@@ MY CODES START FROM HERE@@@@@@@@@@@@@@@@@@ **/

// select area and get our ambulance 

const locationSelect = document.getElementById("location-select");
const option1 = document.getElementById('option1');
const bongaonDiv = document.getElementById("Bongaon");
const gopalnagarDiv = document.getElementById("Gopalnagar");
const chandparaDiv = document.getElementById("Chandpara");
const helenchaDiv = document.getElementById("Helencha");
const habrahDiv = document.getElementById("Habrah");
const gobardangaDiv = document.getElementById("Gobardanga");

locationSelect.addEventListener("change", function() {
  // Hide all divs
  option1.style.display = "none"
  bongaonDiv.style.display = "none";
  gopalnagarDiv.style.display = "none";
  chandparaDiv.style.display = "none";
  helenchaDiv.style.display = "none";
  habrahDiv.style.display = "none";
  gobardangaDiv.style.display = "none";
  
  // Show selected div
  const hdabm = document.getElementById('hdabm');
  const selectedLocation = this.value;
  const selectedDiv = document.getElementById(selectedLocation);
  selectedDiv.style.display = "flex";
  // hdabm.style.display = 'none';

});
// This code will hide all the other divs when a new option is selected, and show only the selected one.

