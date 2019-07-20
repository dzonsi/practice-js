import _ from 'lodash';

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
		const element = document.createElement('div')
		element.innerHTML = _.join(['Hello', 'webpack'], ' ')
		return element
	}).catch(error => 'An error occurred while loading the component');
}

document.body.appendChild(component());