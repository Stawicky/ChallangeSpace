
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