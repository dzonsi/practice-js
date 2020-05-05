// after load execute animations
window.addEventListener('load', () => {
	firstSectionAnimation();
	secondSectionAnimation();
	thirdSectionAnimation();
});

// animation for first section
function firstSectionAnimation() {

	// h1 animation
	anime({
		targets: 'section:first-child h1 span',
		scale: [4, 1],
		opacity: [0, 1],
		duration: 400,
		easing: 'linear',
		delay: (el, i) => 70*i
	});

	// elements animations
	const elements = document.querySelectorAll('.container.animation-container div');
	const numberOfElemenst = elements.length;
	const duration = 800;
	const delay = duration / numberOfElemenst;
	const easings = [
		'linear',
		'spring(1, 80, 10, 0)',
		'steps(12)',
		'cubicBezier(.5, .05, .1, .3)',
		'easeOutElastic(5, 1.3)'
	];

	let tl = anime.timeline({
    duration: duration,
    complete: function() { tl.restart(); }
  });

	// random number between 0 and max
  function getRandom(max) {
  	return Math.floor(Math.random() * Math.floor(max));
	}

  function animateElement(i) {
  	tl.add({
  		begin: function() {
  			anime({
  				targets: elements[i],
  				translateX: anime.random(-150, 150),
  				translateY: anime.random(-150, 150),
  				rotate: anime.random(0, 360),
  				scale: function() {
  					return anime.random(0.5, 1.5);
  				},
  				easing: easings[getRandom(easings.length)]
  			});
  		}
  	}, i * 5);
  }
  for(let i = 0; i < elements.length; i++) {
  	animateElement(i);
  }

 	// progress animation

	let progress = anime.timeline({
    duration: 500,
    complete: function() { progress.restart(); }
  });
  progress.add({
  	begin: function() {
  		anime({
  			targets: '.all-progress',
 				scaleX: function() {
 					return Math.random();
 				},
 				transformOrigin: function() {
 					return anime.random(0, 100) + '% center 0';
 				},
 				easing: 'linear'
  		});
  	}
  }, 1);
}

// second section animation
function secondSectionAnimation() {

	// h1 animation
	const letters = {};
	letters.opacityIn = [0, 1];
	letters.scaleIn = [0.2, 1];
	letters.scaleOut = 3;
	letters.durationIn = 800;
	letters.durationOut = 600;
	letters.delay = 500;

	anime.timeline({loop: true})
		.add({
			targets: '.letters-container .letters-1',
			opacity: letters.opacityIn,
			scale: letters.scaleIn,
			duration: letters.durationIn
		}).add({
			targets: '.letters-container .letters-1',
			opacity: 0,
			scale: letters.scaleOut,
			duration: letters.durationOut,
			easing: 'easeInExpo',
			delay: letters.delay
		}).add({
			targets: '.letters-2',
			opacity: letters.opacityIn,
			scale: letters.scaleIn,
			duration: letters.durationIn
		}).add({
			targets: '.letters-2',
			opacity: 0,
			scale: letters.scaleOut,
			duration: letters.durationOut,
			easing: 'easeInExpo',
			delay: letters.delay
		}).add({
			targets: '.letters-3',
			opacity: letters.opacityIn,
			scale: letters.scaleIn,
			duration: letters.durationIn
		}).add({
			targets: '.letters-3',
			opacity: 0,
			scale: letters.scaleOut,
			duration: letters.durationOut,
			easing: 'easeInExpo',
			delay: letters.delay
		}).add({
			targets: '.letters-4',
			opacity: letters.opacityIn,
			scale: letters.scaleIn,
			duration: letters.durationIn
		}).add({
			targets: '.letters-4',
			opacity: 0,
			scale: letters.scaleOut,
			duration: letters.durationOut,
			easing: 'easeInExpo',
			delay: letters.delay
		});

		// elements animations
		const wrapper = document.getElementById('wrapper');
		const numberOfEls = 60;
		const duration = 6000;
		const delay = duration / numberOfEls;

		const tl = anime.timeline({
      duration: delay,
      complete: function() { tl.restart(); }
    });

		function createEl(i) {
			const el = document.createElement('div');
      const rotate = (360 / numberOfEls) * i;
      const translateY = -50;

      el.classList.add('el');
      // put background color of every
      // second element red
      if((i +1) % 2 == 0) {
      	el.style.backgroundColor = '#FF4848';
      }
      // rotate element
      el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';

      // add animation to element
      tl.add({
      	begin: function() {
      		anime({
      			targets: el,
      			rotate: [rotate + 'deg', rotate + 10 +'deg'],
      			translateY: [translateY + '%', translateY + 10 + '%'],
      			scale: [1, 1.25],
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: duration * .1
      		});
      	}
      });

      wrapper.appendChild(el);
		}

		for(let i = 0; i < numberOfEls; i++) {
			createEl(i);
		}
}

// animation for third section
function thirdSectionAnimation() {

	const tableContainer = document.getElementsByClassName('dot-container')[0];

	function createElement(i) {
		const el = document.createElement('div');
		el.classList.add('dot');
		tableContainer.appendChild(el);
	}
	for(let i = 0; i < 48; i++) {
		createElement(i);
	}

	const shake = anime({
		targets: '.dot-container .dot',
		translateX: [
			{value: '1', easing: 'easeOutSine', duration: 100},
   		{value: '-1', easing: 'easeInOutQuad', duration: 100},
   		{value: '2', easing: 'easeInOutQuad', duration: 100},
   		{value: '-1', easing: 'easeInOutQuad', duration: 100},
   		{value: '-2', easing: 'easeOutSine', duration: 100},
   		{value: '-1', easing: 'easeInOutQuad', duration: 100},
   		{value: '0', easing: 'easeInOutQuad', duration: 100},
   		{value: '0', easing: 'easeInOutQuad', duration: 100},
   	],
   	translateY: [
			{value: '-2', easing: 'easeOutSine', duration: 100},
   		{value: '-1', easing: 'easeInOutQuad', duration: 100},
   		{value: '0', easing: 'easeInOutQuad', duration: 100},
   		{value: '-3', easing: 'easeInOutQuad', duration: 100},
   		{value: '1', easing: 'easeOutSine', duration: 100},
   		{value: '-1', easing: 'easeInOutQuad', duration: 100},
   		{value: '2', easing: 'easeInOutQuad', duration: 100},
   		{value: '0', easing: 'easeInOutQuad', duration: 100},
   	],
		delay: anime.stagger(200, {grid: [8, 6], from: 'first'}),
		loop: true
	});

	const color = anime({
		targets: '.dot-container .dot',
		backgroundColor: [
			{value: '#FF4848', easing: 'easeOutSine', duration: 500},
   		{value: '#6c757d', easing: 'easeInOutQuad', duration: 1000}
   	],
		delay: anime.stagger(200, {grid: [8, 6], from: 'last'}),
		loop: true
	});

	const play = document.querySelector('.play-control .play');
	play.addEventListener('click', () => {
		shake.play();
		color.play();
	});

	const pause = document.querySelector('.play-control .pause');
	pause.addEventListener('click', () => {
		shake.pause();
		color.pause();
	});

	const restart = document.querySelector('.play-control .restart');
	restart.addEventListener('click', () => {
		shake.restart();
		color.restart();
	});

}

// animation for fourth section
function fourthSectionAnimation() {

	const svg = document.querySelectorAll('svg g');

	for(let i = 0; i < svg.length; i++) {
		svg[i].style.visibility = 'visible';
		anime({
			targets: svg[i].children,
			strokeDashoffset: [anime.setDashoffset, 0],
  		easing: 'easeInOutSine',
  		duration: 1500,
  		delay: function(el, i) { return i * 250 },
		});
	}

}

function animateSvg() {
	const lastSection = document.getElementById('last-section');

	if(window.pageYOffset > (lastSection.offsetTop - 500)) {
		fourthSectionAnimation();
		window.removeEventListener('scroll', animateSvg);
	}

}

window.addEventListener('scroll', animateSvg);
