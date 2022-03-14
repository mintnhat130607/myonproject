var preloader = document.getElementById('preloader');
var ENcontainer = document.getElementById('ENcontainer');
var VNcontainer = document.getElementById('VNcontainer');

function enLangSelect() {

    ENcontainer.style.display = "contents";
    VNcontainer.style.display = "none";
    preloader.style.display = "none";
    document.getElementById('ENenFlag').style.filter = "grayscale(0)";
    document.getElementById('ENenFlag').style.backgroundColor = "#141418"
    document.getElementById('ENvnFlag').style.filter = "grayscale(1)";
    document.getElementById('ENvnFlag').style.backgroundColor = "#23232e;" 
}
function vnLangSelect() {
    VNcontainer.style.display = "contents";
    ENcontainer.style.display = "none";
    preloader.style.display = "none";
    document.getElementById('VNvnFlag').style.filter = "grayscale(0)"; 
    document.getElementById('VNvnFlag').style.backgroundColor = "#141418"
    document.getElementById('VNenFlag').style.filter = "grayscale(1)"; 
    document.getElementById('VNenFlag').style.backgroundColor = "#23232e;"
}
function codeHomePage() {
    preloader.style.display = "none";
}
function codeFoodPage() {
    preloader.style.display = "none";
}
function codeAnimalPage() {
    preloader.style.display = "none";
}
function codeGamePage() {
    preloader.style.display = "none";
}
function progressFood() {
    preloader.style.display = "flex";
    setTimeout(codeFoodPage, Math.floor(Math.random() * 1000) + 500);
}
function progressAnimal() {
    preloader.style.display = "flex";
    setTimeout(codeAnimalPage, Math.floor(Math.random() * 1000) + 500);
}
function progressGame() {
    preloader.style.display = "flex";
    setTimeout(codeGamePage, Math.floor(Math.random() * 1000) + 500);
}
function progressHome() {
    preloader.style.display = "flex";
    setTimeout(codeHomePage, Math.floor(Math.random() * 1000) + 500);
}
function progressENlang() {
    preloader.style.display = "flex";
    setTimeout(enLangSelect, Math.floor(Math.random() * 1000) + 500);
}
function progressVNlang() {
    preloader.style.display = "flex";
    setTimeout(vnLangSelect, Math.floor(Math.random() * 1000) + 500);
}