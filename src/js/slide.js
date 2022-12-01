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
}); 

