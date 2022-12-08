mainSlide();
subSlide();



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
/* 메인 슬라이드 */




function subSlide() {

    const tabSlide = document.querySelector('.tab-menu-container');
    const innerSlider = document.querySelectorAll('#tab1');
    const slideTab = document.querySelectorAll('#tab2');
    let index = 0;
    let slideWidth = 400;
    let slideIterval;
    let pressed = false;
    let startPoint = 0;
    let endPoint = 0;

    slideIterval = setInterval(()=>{
        next();    
        },5000)

    function next() {
        index++;

        if(index===tabSlide.childElementCount) {
            index=0
        }
        move();
    }

    function prev() {
        index--;

        if(index===-1) {
            index = tabSlide.childElementCount-1;
        }
        move();
    }

    function move() {
        tabSlide.setAttribute('style', `transform:translateX(-${400*index}px)`)
        console.log('moved!')
        clearInterval(slideIterval);
        slideIterval = setInterval(()=>{
        next();    
        },5000)
    }
    
    tabSlide.addEventListener("mousedown", (e) => {
        pressed = true;
        startPoint = e.pageX;
        clearInterval(slideIterval);
    });
    
    tabSlide.addEventListener("mouseup", (e) => {
        pressed = false;
        endPoint = e.pageX;
        slideIterval = setInterval(()=>{
            next();    
        },5000)
        
        if(startPoint < endPoint) {
            prev();
        }else if(startPoint > endPoint) {
            next();
        }
    })
    
    tabSlide.addEventListener("mousemove",(e) => {
        if(!pressed) return;
        e.preventDefault();
        const x = e.pageX - startPoint;
        innerSlider[0].style.transform = `translateX(-${index*(slideWidth + 150)-x}px)`
    })

}
