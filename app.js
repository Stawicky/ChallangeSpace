
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	
	burger.addEventListener('click', ()=> {
		// Change burger icon
		burger.classList.toggle('close');
		
		//Show nav menu
		nav.classList.toggle('nav-active');
	});
	
}

navSlide();