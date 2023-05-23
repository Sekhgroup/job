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
};



//***************one time click and text change submit button for booking***************************** */

document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('button[type="submit"]');
    button.addEventListener("click", function() {
      setTimeout(function() {
        disableButton();
      }, 200); // 200 milliseconds = .2 second
    });
  
    function disableButton() {
      button.disabled = true;
      button.style.background = "#4ff918";
      var originalText = button.innerHTML;
      var dots = 0;
      button.innerHTML = "Wait";
  
      var intervalId = setInterval(function() {
        dots = (dots + 1) % 4;
        button.innerHTML = "Wait" + Array(dots + 1).join(".");
      }, 500); // 500 milliseconds = 0.5 second
    }
  });
  
