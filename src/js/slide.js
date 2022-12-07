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

    const tabSlide = document.getElementsByClassName('tab-menu-container');
    const innerSlider = document.querySelectorAll('#tab1');
    const slideTab = document.querySelectorAll('#tab2');
    let savePosition = 0
    let pressed = false // 클릭 상태 체크
    let startx // 마우스 드래그 시작점 x좌표
    let x // 마우스 드래그시 x좌표
    
    
    
    
    window.addEventListener("mouseup", () => {
        pressed = false
    })
    
    for(let i = 0 ; i < tabSlide.length ; i ++){
    
        tabSlide[i].addEventListener("mousedown", e => {
            pressed = true
            startx = checkPosX(e)
    
            tabSlide[i].style.cursor = "grabbing";
            innerSlider[i].style.transition = `0.5s`;
        })
        
        tabSlide[i].addEventListener("mouseup", () => {
            tabSlide[i].style.cursor = "grab";
            savePosition = startx + x;
            innerSlider[i].style.transition = `0.5s`;
            x=0;
        })
    
        tabSlide[i].addEventListener("mousemove", e => {
            if (!pressed) return
            e.preventDefault()
            x = checkPosX(e) - startx;
            console.log(startx, x)
            innerSlider[i].style.transform = `translateX(-${savePosition - x}px)`;
            checkboundary(tabSlide[i],innerSlider[i])
        })
    }
    
    function checkboundary(tas,ins) {
        let outer = tas.getBoundingClientRect()
        let inner = ins.getBoundingClientRect()
    
        if (parseInt(ins.style.left) > 0) {
            ins.style.transform = "0px"
        } else if (inner.right < outer.right) {
            ins.style.left = `-${inner.width - outer.width}px`
        }
    }

    function checkPosX(e) {
    
        return e.clientX;
    }
/* 탭1 */


    // window.addEventListener("mouseup", () => {
    //     pressed = false
    // })
    
    // for(let i = 0 ; i < tabSlide.length ; i ++){
    
    //     tabSlide[i].addEventListener("mousedown", e => {
    //         pressed = true
    //         startx = checkPosX(e)
    
    //         tabSlide[i].style.cursor = "grab";
    //         slideTab[i].style.transition = `0.5s`;
    //     })
        
    //     tabSlide[i].addEventListener("mouseup", () => {
    //         tabSlide[i].style.cursor = "grab";
    //         savePosition = startx + x;
    //         slideTab[i].style.transition = `0.5s`;
    //         x=0;
    //     })
    
    //     tabSlide[i].addEventListener("mousemove", e => {
    //         if (!pressed) return
    //         e.preventDefault()
    //         x = checkPosX(e) - startx;
    //         console.log(startx, x)
    //         slideTab[i].style.transform = `translateX(-${savePosition - x}px)`;
    //         checkboundary(tabSlide[i],slideTab[i])
    //     })
    // }
    
    // function checkboundary(tas,ins) {
    //     let outer = tas.getBoundingClientRect()
    //     let inner = ins.getBoundingClientRect()
    
    //     // if (parseInt(ins.style.left) > 0) {
    //     //     ins.style.left = "0px"
    //     // } else if (inner.right < outer.right) {
    //     //     ins.style.left = `-${inner.width - outer.width}px`
    //     // }
    // }
    
    // function checkPosX(e) {
    
    //     return e.clientX;
    // }
/* 탭2 */
}
