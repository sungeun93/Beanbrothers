const gnb = document.getElementById('gnb');
const header = document.getElementById('header');
const snb = document.getElementsByClassName('snb');

gnb.addEventListener('mouseenter', ()=>{
    for(const element of snb){
        element.classList.add('show');
    }
    header.classList.add('open-header');
});

header.addEventListener('mouseleave', ()=> {
    for(const element of snb){
        element.classList.remove('show');
    }
    header.classList.remove('open-header');
});
/* 헤더 내려오기 */

function brand () {
    const unit_link = document.getElementsByClassName('unit-link');
    for(let i = 0; i < unit_link.length; i ++) {
        unit_link[i].style.transition = '1s';
        if(unit_link[i].getBoundingClientRect().top - window.innerHeight < 0) {
            if(i == 1) {
                unit_link[i].classList.add('active');
            }else {
                unit_link[i].classList.remove('active');
            }
        }
    }
};
/* brand 글자 올라오기 */


const rotation = document.querySelector(".rotation");
    slide = document.querySelector(".rotation > ul");
    slideImg = document.querySelectorAll(".rotation > ul > li")
    slidercounter = slideImg.length;
let currentIndex = 0;

for(i=0; i < slidercounter; i ++) {
    slideImg[i].style.left = '${i*100}%';
}

var lele = 0;
var i = 0;

function moveevent(){
    setInterval(function(){
        lele += 100;
        slide.style.transition ='.3s'
        slide.style.left ="-" + lele +"%";
        i++;
    }, 1000)
}

moveevent();  
/* beanstagram 이미지 슬라이드 */
