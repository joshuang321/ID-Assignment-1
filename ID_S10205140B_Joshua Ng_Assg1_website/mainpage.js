var currentslide = 0;
var Prevslide = 0;
var length = document.getElementsByClassName("slide").length

function prevslide() {
    Prevslide = currentslide;
    currentslide = ((--currentslide % length ) +length ) % length;
    showCurrentSlide();
}

function nextslide() {
    Prevslide = currentslide;
    currentslide = ((++currentslide % length ) +length ) % length;
    showCurrentSlide();
}

function showCurrentSlide() {
    var slides =  document.getElementsByClassName("slide");
    slides[Prevslide].style.display = "none";
    slides[currentslide].style.display = "block";
}

showCurrentSlide();