import { Observable } from 'rxjs';

// introduction section

import { fromEvent } from 'rxjs';
import { scan, throttleTime, map } from 'rxjs/operators';

fromEvent(document, 'click').subscribe(() => {
  console.log('Clicked!');
});

fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Clicked ${count} times.`));

// one click per second

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    scan(count => count + 1, 0)
  )
  .subscribe(count => console.log(`Clicked ${count} times.`));

// mouse x position for every click

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map((event: MouseEvent) => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe(count => console.log(count));

// observable

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('Just before subscribe');
observable.subscribe({
  next(x) {
    console.log(`Got value ${x}`);
  },
  error(err) {
    console.error(`Something wrong occured ${err}`);
  },
  complete() {
    console.log('done');
  }
});
console.log('Just after subscribe');

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
});
foo.subscribe(x => {
  console.log(x);
});
foo.subscribe(y => {
  console.log(y);
});

// function.call() means 'give me one value synchronously'
// observable.subscribe() means 'give me any amount of values,
// either synchronoysly or asynchronously'

// anatomy of an observable

const observable2 = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    const time = new Date();
    subscriber.next(time);
  }, 1000);
});

const time = observable2.subscribe((x: string) => {
  console.log(x);
  const first: { innerHTML: string } = document.getElementById('first');
  first.innerHTML = x.toLocaleString();
});

// 'next' notification sends a value such as a Number, a String, an Object
// 'error' notification sends a JS Error or exception
// 'complete' notification does not send a value

const observable3 = new Observable(function subscribe(subscriber) {
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  } catch (err) {
    subscriber.error(err); // delivers an error if it caught one
  }
});

// disposing observable executions

var button = document.getElementById('unsubscribe');
fromEvent(button, 'click').subscribe(() => {
  time.unsubscribe();
  console.log('time unsubscribed!');
});

const observable4 = new Observable(function subscribe(subscriber) {
  // Keep track of the interval resource
  const intervalId = setInterval(() => {
    subscriber.next('hi');
  }, 1000);

  // Provide a way of canceling and disposing the interval resource
  return function unsubscribe() {
    clearInterval(intervalId);
  };
});

// same thing

function subscribe(subscriber: any) {
  const intervalId = setInterval(() => {
    subscriber.next('hi');
  }, 1000);

  return function unsubscribe() {
    clearInterval(intervalId);
  };
}

const unsubscribe = subscribe({next: (x: any) => console.log(x)});
setTimeout(() => {
  unsubscribe();
}, 10000);