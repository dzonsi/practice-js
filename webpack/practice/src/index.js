import './style.css';

function element() {
	const h1 = document.createElement('h1');
	h1.innerHTML = 'Webpack test server!'

	const div = document.createElement('div');
	const p = document.createElement('p');
	p.innerHTML = 'Webpack is cool!';

	div.appendChild(h1);
	div.appendChild(p);

	return div;

}

const div = element();
document.body.appendChild(div);