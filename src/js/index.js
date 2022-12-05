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




const toggleBtn = document.getElementById('hamburger');
const menu = document.getElementsByClassName('navbar')[0];
const subMenu = document.getElementsByClassName('navbar_menu')[0];

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    subMenu.classList.toggle('active');
});
/* 반응형 햄버거 */






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





function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace('active','');
    }
    document.getElementById('tabName').style.display = "block";
    evt.currentTarget.className += "active";
}
