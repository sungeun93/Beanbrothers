



const gnb = document.getElementById('gnb');
const header = document.getElementById('header');
const snb = document.getElementsByClassName('snb');

gnb.addEventListener('mouseenter', ()=>{
    for(const element of snb){
        element.classList.add('show');
    }
    header.classList.add('open-header');
})

header.addEventListener('mouseleave', ()=> {
    for(const element of snb){
        element.classList.remove('show');
    }
    header.classList.remove('open-header');
})