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

const unitLink = document.getElementsByClassName("unit-link");

brand(); 

function brand() {
    const unitLink = document.getElementsByClassName('unit-link');
    for(let i = 0; i < unitLink.length; i ++) {
        unitLink[i].style.transition = '1s';

        window.addEventListener('scroll', () => {
            // unitLink.classList.add('active'; 
        if(unitLink[i].getBoundingClientRect().top - window.innerHeight < 0) {
                unitLink[i].classList.add('active');
            }else {
                unitLink[i].classList.remove('active');
            }
        })
        
    }
}; 
/* brand 글자 올라오기 */

