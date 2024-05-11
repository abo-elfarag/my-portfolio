
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');


window.onscroll = ()=> {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
};

// ------------------------sticky  navbar----------------------------//
let nav = document.querySelector('nav');
console.log(nav)

nav.classList.toggle('sticky', window.scrollY > 100);

// ------------------------  scroll reveal  ----------------------------//
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.img-home, .iconCard, .form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .content-about', { origin: 'right' });

// ------------------------  typed js  ----------------------------//

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
