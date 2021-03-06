var users;
var userId = 0;

const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const street = document.getElementById('street');
const suite = document.getElementById('suite');
const city = document.getElementById('city');
const zipcode = document.getElementById('zipcode');
const lat = document.getElementById('lat');
const lng = document.getElementById('lng');
const phone = document.getElementById('phone');
const website = document.getElementById('website');
const companyname = document.getElementById('companyname');
const catchPhrase = document.getElementById('catchphrase');
const bs = document.getElementById('bs');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
prev.addEventListener('click', prevUser);
next.addEventListener('click', nextUser);

const loading = document.getElementById('loading');

function loadData() {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status === 200) {
			users = JSON.parse(this.response);
			console.log(users);
			writeUser(users[userId]);
			//loading.parentNode.removeChild(loading); uklanja skroz
			loading.classList.add('loading-remove');
		}
	}
	xhttp.onerror = function() {
		console.log('An error occurred during the user transfer');
		loading.classList.add('loading-remove');
		error.classList.remove('error-remove');
	}
	xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
	xhttp.send();

}

loadData();

function writeUser(user) {
	name.innerHTML = user.name;
	username.innerHTML = user.username;
	email.innerHTML = user.email;
	street.innerHTML = user.address.street;
	suite.innerHTML = user.address.suite;
	city.innerHTML = user.address.city;
	zipcode.innerHTML = user.address.zipcode;
	lat.innerHTML = user.address.geo.lat;
	lng.innerHTML = user.address.geo.lng;
	phone.innerHTML = user.phone;
	website.innerHTML = user.website;
	companyname.innerHTML = user.company.name;
	catchPhrase.innerHTML = user.company.catchPhrase;
	bs.innerHTML = user.company.bs;
}


function prevUser() {
	if(userId === 0) {
		userId = users.length;
	}
	//userId === 0 ? userId = users.length : userId;
	//sta je bolje???
	userId = (userId - 1) % users.length;
	writeUser(users[userId]);
}

function nextUser() {
	userId = (userId + 1) % users.length;
	writeUser(users[userId]);
}