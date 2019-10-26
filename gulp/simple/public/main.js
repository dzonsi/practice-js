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
// ????
function closeSideBar() {
	if(window.outerWidth > 800) {
	sideNav.classList.remove('open');
	menuBarIcon.classList.remove('menu-bar-open');}
}
document.body.onresize = closeSideBar();