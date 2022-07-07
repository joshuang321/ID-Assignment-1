var currentfirstSlide = 1;
var currentlastSlide = 4;

var prevSpecialist = "";

var signup = document.getElementsByClassName("register-news");

function prevfewSlides() {
    if (currentfirstSlide == 1)
        return;
    currentfirstSlide -= 3;
    currentlastSlide -= 3;
    showCurrentSlide();
}

function nextfewSlides() {
    if (currentlastSlide == document.getElementsByClassName("specialists").length)
        return;
    currentfirstSlide +=3;
    currentlastSlide += 3;
    showCurrentSlide();
}

function showCurrentSlide() {
    var specialists =  document.getElementsByClassName("specialists");
    for (var i=0; i < specialists.length; i++)
    {
        specialists[i].style.display = "none"
    }
    for (var i=0; i < 4; i++)
    {
        specialists[i +currentfirstSlide -1].style.display = "block";
        specialists[i +currentfirstSlide -1].style.left = (i * 23 + 3) + "%";
    }
}

function seeSpecialists(n) {
    if (prevSpecialist != "")
    {
        var specialists = document.getElementById(prevSpecialist);
        specialists.style.display = "none";
    }
    prevSpecialist = n + "";
    var specialists = document.getElementById(prevSpecialist);
    specialists.style.display = "block";
    specialists.scrollIntoView({behavior: "smooth"});
    signup[0].style.top = "162%";
}

showCurrentSlide();