const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [97,89,85,87,80,70,50]

window.addEventListener("scroll", () => {
    mainFn();
});

// in order to avoid unexpected and wired behavior, i want to run the fn before we 'scroll'
//so create mainfn here and call it twice, 1 outside and 1 insde eventlistner('scroll');
const mainFn = () =>{
    if(window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section,i) => {
        if(window.pageYOffset >= section.offsetTop - 10){
            navbarLinks.forEach(navbarLink =>{
                navbarLink.classList.remove('change')
            })
            navbarLinks[i].classList.add('change')
        }
    });

    if(window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, i) =>{
            el.style.width = `${progressBarPercents[i]}%`
            el.previousElementSibling.firstElementChild.textContent=progressBarPercents[i];
        });
    }
}

mainFn()

//reload the page once we resize the window:

window.addEventListener('resize', () => {
    window.location.reload()
})