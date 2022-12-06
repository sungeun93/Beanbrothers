function mainSlide() {

    
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

}

