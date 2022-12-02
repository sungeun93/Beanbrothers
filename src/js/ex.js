const slideWrapper = document.querySelector('.main-slide');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
const slidePage = document.querySelector('.slide-page');
let index = 0 ;
let slideIterval;

초기화();

function 초기화() {
    slideWrapper.setAttribute('width',`${slideWrapper.childElementCount*100}vw`)
    prevButton.addEventListener('click', (e)=>{
        이전()

    });
    nextButton.addEventListener('click', 다음);
    이동적용();
}

function 다음(){
    index++;

    if(index===slideWrapper.childElementCount){
        index=0;
    }
    이동적용();
    console.log('실행');
}

function 이전() {
    index--;

    if(index===-1) {
        index = slideWrapper.childElementCount-1;
    }
    이동적용();
}

function 이동적용() {
    slideWrapper.setAttribute('style', `transform:translateX(-${100*index}vw)`)

    clearInterval(slideIterval);
    slideIterval = setInterval(() => {
        다음();
    }, 5000);
    slidePage.innerText = `${index+1}/${slideWrapper.childElementCount}`
}