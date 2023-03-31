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
      var span = li[i].getElementsByTagName("span")[0];
      var text = span.textContent.toLowerCase();
      if (text.indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  
  // Add event listener to the search input
  document.getElementById("mySearch").addEventListener("keyup", searchList);
  
  
  
  
  
  
  
  
  // ONCLICK Product NAME ENTER IN ORDER FORM 
  
  
  // querySelectorAll method to get all the li elements and then use the querySelector method to get the span element inside each li element if it exists, otherwise get the text of the li element. Here’s the updated code:*/
 // get all the li elements
 const listItems = document.querySelectorAll('li');

 // attach a click event listener to each li
 listItems.forEach((li) => {
   li.addEventListener('click', () => {
     // get the span element inside the clicked li if it exists, otherwise get the text of the li
     const span = li.querySelector('span');
     const productName = span ? span.innerText : li.innerText;
 
     // get the price element inside the clicked li if it exists
     const productPrice = li.querySelector('.productPrice').innerText;
 
     // update the text of the Product_type and Product_price divs with the productName and productPrice values
     const outputName = document.getElementById('productName');
     outputName.value = productName;
 
     const outputPrice = document.getElementById('PrdcPrcFrm');
     outputPrice.value = productPrice;
   });
 });
 
  

  
  
  
  
  // ONCLICK  ORDER FORM POPUP
  
  function ordrnw(){
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



// onclick image zoom  


const images = document.querySelectorAll('.product-image');
images.forEach((image) => {
  image.addEventListener('click', () => {
    window.location.href = image.src;
  });
});


// nearest image load by user scroll 

const loadimages = document.querySelectorAll('img[data-src]');

const options = {
  threshold: 0,
  rootMargin: '0px 0px 100px 0px' // Load the image 100px before it enters the viewport
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute('data-src');
      img.setAttribute('src', src);
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
}, options);

loadimages.forEach(img => {
  observer.observe(img);
});

// idenhi ivdi balvisi likki 10 arba .............................................................................

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







function shareProduct() {
  if (navigator.share) {
    navigator.share({
      title: 'Check out this product',
      text: 'Godrej direct cool refrigerator / single door, good condition, 3 month warranty',
      url: window.location.href
    })
      .then(() => console.log('Product shared successfully'))
      .catch((error) => console.log('Error sharing product', error));
  } else {
    console.log('Web Share API not supported');
  }
}
