const slide = document.querySelector(".main-slide");
let slideWidth = slide.clienWidth;

const preBtn = document.querySelector(".xi-arrow-left");
const nextBtn = document.querySelector(".xi-arrow-right");

let slideBanner = document.querySelectorAll(".main_banner");
const maxSlide = slideBanner.length;

let currSlide = 1;

const startSlide = slideBanner[0];
const endSlide = slideBanner[slideBanner.length-1];

const startElem = document.createElement("div");
const endElem = document.createElement("div");