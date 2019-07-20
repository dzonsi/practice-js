import _ from 'lodash';
import './style.css';
import Icon from './img_avatar.png';
import Data from './data.xml';

function component() {
	const element = document.createElement('div');

	// Use lodash, imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// Add image to our existing script
	const myIcon = new Image();// ekvivaletn document.createElement('img')
	myIcon.src = Icon;

	element.appendChild(myIcon);

	console.log(Data);

	return element;
}

document.body.appendChild(component());