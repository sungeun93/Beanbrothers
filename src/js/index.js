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





scrollTop(); 

function scrollTop() {
    const scrollAnimation = document.getElementsByClassName('scroll-animation');
    for(let i = 0; i < scrollAnimation.length; i ++) {
        scrollAnimation[i].style.transition = '1s';

        window.addEventListener('scroll', () => {
        if(scrollAnimation[i].getBoundingClientRect().top - window.innerHeight < 0) {
                scrollAnimation[i].classList.add('active');
            }else {
                scrollAnimation[i].classList.remove('active');
            }
        })      
    }
}; 
/* brand, service 글자 올라오기 */

