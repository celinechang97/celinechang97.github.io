// var audio = new Audio('meditation.mp3');

// window.onload= audio.play();


/* FOR BACK TO TOP BUTTON*/

//Get the button
var mybutton = document.getElementById("top_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  console.log("scroll");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log("hi");
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}