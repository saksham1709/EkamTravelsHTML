// setInterval(() => {
//     cta.style.transform = "translateX(0vw)";
// }, 3000);


window.onscroll = function () { scrollFunction2() , scrollFunction1() };
const nav = document.querySelector('.nav');
function scrollFunction2(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        nav.style.background = "black";
        nav.style.position = "fixed";
        nav.style.top = "0px"
    }
    else{
        nav.style.background = "none";
        nav.style.position = "absolute";
    }
}

var mybutton = document.getElementById("myBtn");
function scrollFunction1() {
    if (document.body.scrollTop > 316 || document.documentElement.scrollTop > 316) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// const back = document.querySelector('.intro');
// setInterval(() => {
//     back.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./img/hp.jpg')";
//     back.style.backgroundSize = "cover";
//     // back.style.linearGradient = "rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)";
// }, 10000);


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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
} 

// const back = document.querySelector('.jumbo');
function call(){
    console.log('open')
    document.body.style.overflow = "hidden";
    cta.style.display = "flex";
}
function call2(){
    console.log('close')
    document.body.style.overflowY = "scroll";
    cta.style.display = "none";
}