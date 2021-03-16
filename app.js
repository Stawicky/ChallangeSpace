
//gallery hover
const galleryimgs =document.querySelectorAll('.imgInGallery');

galleryimgs.forEach(galleryimg => {
    const fadeImg =  galleryimg.querySelector('.fadeImg');
    const description =  galleryimg.querySelector('.descriptionInImg');
    galleryimg.addEventListener('mouseover', function(){
        description.style.color = "black";
        fadeImg.style.background= "rgba(255,255,255, 0.6)";
    });
    galleryimg.addEventListener('mouseleave', function(){
        description.style.color = "white";
        fadeImg.style.background= "linear-gradient(to bottom, rgba(255,255,255,0),rgba(0,0,0, 0.6))";
    });

})

//burger menu
const burger=document.querySelector('.burger');
const navmenu=document.querySelector('.nav-links')
burger.addEventListener('click', function(){
    navmenu.classList.toggle('menuactive')
    burger.classList.toggle('closeburger')
})

//fadein
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver (
    function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
},
 appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

const h1 = document.querySelector('h1');

const showh1 = new IntersectionObserver (function(entries, showh1) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appearh1');
            showh1.unobserve(entry.target);
        }
    })
    
}, appearOptions);
showh1.observe(h1);