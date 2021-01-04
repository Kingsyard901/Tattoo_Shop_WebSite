// Example for:
// https://github.com/fabeat/responsive-fullpage-scroll
// Script for pagescrolling and showing pagedots.

document.addEventListener("DOMContentLoaded", function() {
    var wrap = document.getElementById('wrap');
    var fps = new FullPageScroll(wrap);
    var indicator = document.createElement('div');
    indicator.id = 'indicator';
    var slideIndicators = [];
    fps.slides.forEach(function(slide, index){
      var slideIndicator = document.createElement('div');
      slideIndicator.onclick = function() {
        fps.goToSlide(index);
      }
      if (index === fps.currentSlide) {
        slideIndicator.className = "active";
      }
      indicator.appendChild(slideIndicator);
      slideIndicators.push(slideIndicator);
    });
    document.body.appendChild(indicator);
    fps.onslide = function() {
      slideIndicators.forEach(function(slideIndicator, index) {
        if (index === fps.currentSlide) {
          slideIndicator.className = "active";
        } else {
          slideIndicator.className = "";
        }
      });
    }
});

// START Script Image Gallery

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// END Script Image Gallery