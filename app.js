var slideIndex = 1;

showDivs(slideIndex);
navToggle();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

// image slider
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide-images");
  var y = document.getElementsByClassName("slide-captions");
  
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].style.display = "block";
}

// toggles the navigation when burger icon is clicked for mobile widths
function navToggle() {
  
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  });

  nav.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  });
}