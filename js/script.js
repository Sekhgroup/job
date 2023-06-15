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



// SEARCH BAR 

function searchList() {
  // Get the search term and convert to lowercase
  var input = document.getElementById("mySearch");
  var filter = input.value.toLowerCase();

  // Get the list and list items
  var ul = document.getElementById("myList");
  var li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those that don't match the search query
  for (var i = 0; i < li.length; i++) {
    var text = li[i].textContent.toLowerCase();
    if (text.indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Add event listener to the search input
document.getElementById("mySearch").addEventListener("keyup", searchList);








/* ///////////////////// ONCLICK SERVICE NAME ENTER IN ORDER FORM ///////////////////////////////////////////////////


// querySelectorAll method to get all the li elements and then use the querySelector method to get the h3 element inside each li element if it exists, otherwise get the text of the li element. Here’s the updated code:*/

// get all the li elements
const listItems = document.querySelectorAll('li');

// attach a click event listener to each li
listItems.forEach((li) => {
  li.addEventListener('click', () => {
    // get the h3 element inside the clicked li if it exists, otherwise get the text of the li
    const h3 = li.querySelector('h3');
    const details = li.querySelector('p')
    const text = h3 ? h3.innerText : li.innerText;
    const text2 = details.innerText;
    
    // update the text of the service_type div with the text
    const output = document.getElementById('service_type');
    const output2 = document.getElementById('task-details');
    output.value = text;
    output2.innerText = text2;
    
    console.log("yes");
  });
});
// This should get the text of the h3 element inside the clicked li element if it exists, otherwise get the text of the li element.





// ONCLICK  ORDER FORM POPUP

function fn(){
  let FullBox = document.getElementById("FullBox");
  let popup = document.getElementById("Order");
  var Service = document.getElementById("Service");

  if (FullBox.style.display === "flex") {
    setTimeout(function() {
      popup.style.display = "block";
      FullBox.style.display = "none";
      popup.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); //scroll kore popup div e niye jabe
      Service.style.backgroundColor = "var(--bright-navy-blue)";
    }, 10); // 2-second delay
  }
}





// POPUP CLOSE FUNCTION 

function Closefn(){
  let FullBox = document.getElementById("FullBox");
  let popup = document.getElementById("Order");

  if (popup.style.display === "block") {
    popup.style.display = "none";
    FullBox.style.display = "flex";
    Service.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); //scroll kore popup div e niye jabe
    Service.style.backgroundColor = "white";
}
}


// TYPING PLACE HOLDER 

var sbar = document.getElementById("mySearch");
var placeholder = sbar.getAttribute("placeholder");
var i = 0;
setInterval(function() {
  if (i < placeholder.length) {
    sbar.setAttribute("placeholder", placeholder.slice(0, i) + " |");
    i++;
  } else {
    sbar.setAttribute("placeholder", placeholder.slice(0, i));
    i = 0;
  }
}, 200);


// idenhi ivdi balvisi likki 10 arba 

var clickCount = 0;
var clickDiv = document.getElementById("clickDiv");
var hiddenDiv = document.getElementById("hdn");

if (!clickDiv || !hiddenDiv) {
  console.error("Could not find clickDiv or hiddenDiv");
} else {
  clickDiv.addEventListener("click", function() {
    clickCount++;
    if (clickCount === 10) {
      hiddenDiv.style.display = "block";
    }
  });
}







//******************************************** DYNAMIC Block APPEAR BY DISTRICT********************************* */

 // Get the first select input
 const districtSelect = document.getElementById('District');

 // Get the second select input
 const BlockSelect = document.getElementById('Block');

 // Define the Blocks for each district
 const Blocks = {
   N_24_PGS: ['Select Block/City', 'Akaipur','Balia','Bongaon','Bhashanpota', 'Chowberia', 'Chandpara','Chhaigharia','Ganrapota','Gobardanga', 'Gopalnagar','Habra','Helencha','Kalupur','Media Bazar','Nahata','Nataberia','Palla','Thakurnagar'],
   S_24_PGS: ['Upcoming soon', ],
   Nadia: ['Select Block/City','Gangnapur','Kupars','Majhergram','Rainagar','Ranaghat']
 };

 // Function to populate the Block select input based on the selected district
 function populateBlocks() {
   // Clear the Block select input
   BlockSelect.innerHTML = '';

   // Get the selected district
   const selecteddistrict = districtSelect.value;

   // If a valid district is selected, populate the Block select input
   if (selecteddistrict !== 'chose') {
     // Get the Blocks for the selected district
     const districtBlocks = Blocks[selecteddistrict];

     // Create option elements for each Block and append them to the Block select input
     districtBlocks.forEach(Block => {
       const option = document.createElement('option');
       option.value = Block;
       option.text = Block;
       BlockSelect.appendChild(option);
     });

     // Show the Block select input
     BlockSelect.style.display = 'block';
   } else {
     // Hide the Block select input if no district is selected
     BlockSelect.innerHTML = '';
   }
 }

 // Add an event listener to the district select input
 districtSelect.addEventListener('change', populateBlocks);



//******************************************** NO INTERNET ********************************* */

// Internet connection checker
function connection_checker() {
  // Getting full screen connection status
  const full_screen_widget = document.getElementById("connection-checker-full-screen")
  // Getting "offline-error-activated" status
  const offline_error_activated = document.getElementsByClassName("offline-error-activated")[0]
  // If the user is online and disconnection error is activated
  if (navigator.onLine == true && offline_error_activated != undefined) {
      // Add a green background color for disconnection error
      full_screen_widget.style.backgroundColor = "#5bff29"
      location.reload();
      // Adding 1 second delay to avoid interference with changing background color smoothly
      setTimeout(function () {
          // Hiding disconnection error with animation
          full_screen_widget.setAttribute("class", "flip-out-diag-2-tl")
      }, 1000)
      // Adding 2 seconds delay to avoid interference with hiding animation
      setTimeout(function () {
          // Hiding disconnection error element
          full_screen_widget.style.visibility = "hidden"
      }, 2000)
      // Enable all elements click and selection
      document.body.style.userSelect = "auto"
      document.body.style.pointerEvents = "auto"
  } else if (navigator.onLine == false) { // If user is offline
      // Display disconnection error with animation
      full_screen_widget.setAttribute("class", "flip-in-diag-2-br offline-error-activated")
      // Display disconnection error element
      full_screen_widget.style.visibility = "visible"
      // Add a red background color for disconnection error
      full_screen_widget.style.backgroundColor = "#fff"
      // Disable all elements click and selection
      document.body.style.userSelect = "none"
      document.body.style.pointerEvents = "none"
  }
}

// Checking the user internet connection every 1 second
setInterval(connection_checker, 1000)
