/* const slide = document.querySelector(".main-slide");
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

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startSlide.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

slideBanner[0].before(endElem);
slideBanner[slideBanner.length - 1].after(startElem);

slideBanner = document.querySelector(".main_banner");
let offset = slideWidth + currSlide;
slideBanner.forEach((i) => {
    i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
    currSlide++; 

    if(currSlide < maxSlide) {
        const offset = slideWidth * currSlide;
        slideBanner.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
    } else {
currSlide = 0;
let offset = slideWidth * currSlide;
slideBanner.forEach((i) => {
    i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
});
currSlide++;
offset = slideWidth * currSlide;
setTimeout(() => {
    slideBanner.forEach((i) => {
    i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
    });
}, 0);
    }
}

function preMove() {
    currSlide--;
    if(currSlide > 0) {
        const offset = slideWidth * currSlide;
        slideBanner.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
    } else {
        currSlide = maxSlide + 1;
        let offset = slideWidth * currSlide;
        slideBanner.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        });
        currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
    slideBanner.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
    });
    }, 0);
    }
}

nextBtn.addEventListener("click",() => {
    nextMove();
});
preBtn.addEventListener("click",() => {
    preMove();
});
window.addEventListener("resize",() => {
    slideWidth = slide.clientWidth
});

let startPoint = 0;
let endPoint = 0;

slide.addEventListener("mousedown",(e) => {
    startPoint = e.pageX;
});
slide.addEventListener("mouseup", (e) => {
    endPoint = e.pageX;
    if(startPoint < endPoint) {
        preMove();
    }else if(startPoint > endPoint) {
        nextMove();
    }
});

slide.addEventListener("touchstart",(e) => {
    startPoint = e.touches[0].pageX;
});
slide.addEventListener("touchend", (e) => {
    endPoint = e.changedTouches[0].pageX;
    if(startPoint < endPoint) {
        preMove();
    }else if(startPoint > endPoint) {
        nextMove();
    }
});

let loopInterval = setInterval(() => {
    nextMove();
},3000);

slide.addEventListener("mouseover", () => {
    clearInterval(loopInterval);
});

slide.addEventListener("mouseout", () => {
    loopInterval = setInterval(() => {
    nextMove();
    }, 3000);
}); */

let curPos = 0; // 현재 보여주는 이미지의 인덱스 번호
let positionValue = 0; // 이미지 태그의 위치 값 지정할 변수
const IMAGE_WIDTH = 1920;

const prevBtn = document.querySelector(".xi-arrow-left");
const nextBtn = document.querySelector(".xi-arrow-right");
const main_banner = document.querySelector(".main_banner");

function next() {
    if(curPos < 2) {
        prevBtn.removeAttribute('disabled')
        positionValue -= IMAGE_WIDTH;
        main_banner.style.transform = 'translateX(${positionValue}px';
        curPos += 1;
    }
    if(curPos === 2) {
        nextBtn.setAttribute('disabled', 'true');
    }
}

function prev() {
    if(curPos > 0) {
        nextBtn.removeAttribute('disabled')
        positionValue -= IMAGE_WIDTH;
        main_banner.style.transform = 'translateX(${positionValue}px';
        curPos -= 1;
    }
    if(curPos === 0) {
        prevBtn.setAttribute('disabled', 'true');
    }
}

function init() {
    prevBtn.setAttribute('disabled', 'true');
    nextBtn.addEventListener("click", next);
}

init();

