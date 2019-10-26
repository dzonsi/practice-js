// menuBar
var menuBarIcon = document.getElementById('menu-bar-icon');
var navbar = document.getElementById('navbar');
var sideNav = document.getElementById('side-nav');


// menuBar
menuBarIcon.addEventListener('click', () => {
	toggleMenu();
	sideBarOpenClose();
});

function toggleMenu() {
	menuBarIcon.classList.toggle('menu-bar-open');
}

function openMenu() {
	if (navbar.className === 'navbar') {
		navbar.className += ' open';
	} else {
		navbar.className = 'navbar';
	}
}
function sideBarOpenClose() {
	sideNav.classList.toggle('open');
}
// close side nav when screen is more than 800 px wide
function closeSideBar() {
	if(window.outerWidth > 800) {
	sideNav.classList.remove('open');
	menuBarIcon.classList.remove('menu-bar-open');}
	console.log('nikola;ldsajjlfds');
}
window.addEventListener('resize', closeSideBar);