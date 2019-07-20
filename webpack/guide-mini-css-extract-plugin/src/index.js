import _ from 'lodash';
import './style.css';
import './myStyle.css';

function component() {
  const element = document.createElement('div');


  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.className = 'hello';

  return element;
}

document.body.appendChild(component());