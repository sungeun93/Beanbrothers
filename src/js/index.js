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
    const tabcontent = document.getElementsByClassName('tabcontent');
    const tablinks = document.getElementsByClassName('tablinks');

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (let i = 0; i < tabcontent.length; i++) {
        tablinks[i].classList.remove('active');
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.classList.add('active');
}
/* menu-story 탭메뉴 */






