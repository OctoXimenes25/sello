//navbar-fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const top = document.querySelector('#top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        top.classList.remove('hidden');
        top.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed')
        top.classList.remove('flex');
        top.classList.add('hidden');
    }
};


// hamberger rotate krik cliick

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});

//klick di luar amburger
window.addEventListener('click', function(e){
    if(e.target != hamburger &&  e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden')
    }
});

//dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});


//mudah toogle posisi tuir mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Tabs in tailwinds 
let tabs = document.querySelectorAll(".tab")
let indicator = document.querySelector(".indicator")
let panels = document.querySelectorAll(".tab-panel")

indicator.style.width = tabs[0].getBoundingClientRect().with + 'px'
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'

tabs.forEach(tab =>{
    tab.addEventListener('click', () => {

        let tabTarget = tab.getAttribute("aria-controls")

        indicator.style.width = tab.getBoundingClientRect().with + 'px'
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'
    

        panels.forEach(panel =>{
            let panelId = panel.getAttribute("id")
            if (tabTarget === panelId) {
                panel.classList.remove("invisible", "opacity-0")
                panel.classList.add("visible", "opacity-100")
            }else{
                panel.classList.add("invisible", "opacity-0")

            }
        })

    })
})
