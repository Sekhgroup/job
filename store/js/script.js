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


// SEARCH BAR AND FILTER

const select = document.getElementById("area");
const categorySelect = document.getElementById("category");
const list = document.getElementById("myList");

// Filter by area
select.addEventListener("change", function() {
  const selectedValue = this.value;
  const categorySelectedValue = categorySelect.value;
  const lis = list.getElementsByTagName("li");

  for (let i = 0; i < lis.length; i++) {
    const li = lis[i];
    const span = li.getElementsByTagName("span")[0];
    const area = li.getAttribute("data-area");
    const category = li.getAttribute("data-category");

    if ((area === selectedValue || selectedValue === '') && (category === categorySelectedValue || categorySelectedValue === '')) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  }
});

// Filter by category
categorySelect.addEventListener("change", function() {
  const selectedValue = this.value;
  const areaSelectedValue = select.value;
  const lis = list.getElementsByTagName("li");

  for (let i = 0; i < lis.length; i++) {
    const li = lis[i];
    const span = li.getElementsByTagName("span")[0];
    const area = li.getAttribute("data-area");
    const category = li.getAttribute("data-category");

    if ((category === selectedValue || selectedValue === '') && (area === areaSelectedValue || areaSelectedValue === '')) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  }
});

// Search
function searchList() {
  const input = document.getElementById("mySearch");
  const filter = input.value.toLowerCase();
  const lis = list.getElementsByTagName("li");

  for (let i = 0; i < lis.length; i++) {
    const li = lis[i];
    const span = li.getElementsByTagName("span")[0];
    const text = span.textContent.toLowerCase();
    const area = li.getAttribute("data-area");
    const category = li.getAttribute("data-category");

    if ((text.indexOf(filter) > -1) && (area === select.value || select.value === '') && (category === categorySelect.value || categorySelect.value === '')) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  }
}

// Add event listener to the search input
document.getElementById("mySearch").addEventListener("keyup", searchList);

// Filter on load
window.onload = function() {
  searchList();
};

  
  
  
  
  
  
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



// GIV EACH LI UNIC LINK BY JS 

const serviceItems = document.querySelectorAll(".service");

for (let i = 0; i < serviceItems.length; i++) {
  serviceItems[i].setAttribute("id", `service-item-${i}`);
}





// SHARE PROCUT WITH LINK 

function shareProduct(button) {
  // Get the selected li element
  var selectedLi = button.parentNode.parentNode;
  
  // Get the span element inside the li
  var span = selectedLi.querySelector('span');
  
  // Check if Web Share API is supported
  if (navigator.share) {
    navigator.share({
      title: 'Check out this product',
      text: span.textContent,
      url: window.location.href
    })
      .then(() => console.log('Product shared successfully'))
      .catch((error) => console.log('Error sharing product', error));
  } else {
    console.log('Web Share API not supported');
    // Create a temporary input element to copy the link to the clipboard
    var tempInput = document.createElement('input');
    tempInput.setAttribute('value', window.location.href);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Display an alert to inform the user
    alert('Link copied to clipboard: ' + window.location.href);
  }
};




// loadimages after visit to image 

window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target.querySelector('.product-image');
        img.src = img.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  });
  const items = document.querySelectorAll('.service');
  items.forEach((item) => {
    observer.observe(item);
  });
});



