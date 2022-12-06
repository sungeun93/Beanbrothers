const tabSlide = document.getElementsByClassName('tab-menu-container');
const innerSlider = document.querySelectorAll('.tab-menu-container > ul');
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

        tabSlide[i].style.cursor = "grab";
        innerSlider[i].style.transition = `0s`;
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
        ins.style.left = "0px"
    } else if (inner.right < outer.right) {
        ins.style.left = `-${inner.width - outer.width}px`
    }
}

function checkPosX(e) {

    return e.clientX;
}
