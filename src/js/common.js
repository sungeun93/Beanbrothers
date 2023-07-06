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






var topBtn = document.getElementById("top-btn");

window.addEventListener('scroll', function(){
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 200) {
        topBtn.classList.remove('invisible')
    } else {
        topBtn.classList.add('invisible')
    }
})

topBtn.addEventListener('click', function() {
    document.documentElement.scrollTop=0;
})
/* top 버튼 */