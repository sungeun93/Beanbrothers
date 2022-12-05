const slideContainer = document.querySelector(".main-slide");
const prevBtn = document.getElementById("prev-slide");
const nextbtn = document.getElementById("next-slide");
const slidePage = document.querySelector(".slide-page");
let index = 0;
let slideIterval;

initialization();

function initialization() {     // 초기화하기
    slideContainer.setAttribute('width', `${slideContainer.childElementCount*100}vw`)
    prevBtn.addEventListener('click', (e) => {
        prev();
    });
    nextbtn.addEventListener('click', next);
    move();
}

function next() {
    index++;

    if(index===slideContainer.childElementCount) {
        index=0
    }
    move();

}

function prev() {
    index--;

    if(index === -1) {
        index = slideContainer.childElementCount-1;
    }
    move();
}

function move() {
    slideContainer.setAttribute('style' ,`transform:translateX(-${100*index}vw)`)

    clearInterval(slideIterval);
    slideIterval = setInterval(()=>{
    next();   
    },5000);
    slidePage.innerText = `${index+1}/${slideContainer.childElementCount}`
}
/* 메인배너 슬라이드 */



const tabSlide = document.getElementsByClassName('tab-menu-container');
const innerSlider = document.querySelectorAll('.tab-menu-container > ul');
const sliderScroll = document.getElementsByClassName('slider-scroll');
const scroll = document.getElementsByClassName('scroll');
const leftSlide = document.getElementById('left-slide');
const rightSlide = document.getElementById('right-slide');
let pressed = false
let startx
let x



tabSlide.addEventListener("mousedown", e => {
pressed = true
startx = e.offsetX - innerSlider.offsetLeft
tabSlide.style.cursor = "grabbing"
})

tabSlide.addEventListener("mouseenter", () => {
tabSlide.style.cursor = "grab"
})

tabSlide.addEventListener("mouseup", () => {
tabSlide.style.cursor = "grab"
})

window.addEventListener("mouseup", () => {
pressed = false
})

tabSlide.addEventListener("mousemove", e => {
if (!pressed) return
e.preventDefault()
x = e.offsetX

innerSlider.style.left = `${x - startx}px`
checkboundary()
})

function checkboundary() {
let outer = tabSlide.getBoundingClientRect()
let inner = innerSlider.getBoundingClientRect()

if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px"
} else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`
}
}






