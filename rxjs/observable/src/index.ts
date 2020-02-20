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

// OBSERVABLES

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


// OPERATORS

// Pipeable operators is a function that takes
// an Observable as its input and returns
// another Observable. It is a pure operation:
// the previous Observable stays unmodified

// Creation operators are kind of operator
// which can be called as standalone functions
// to create a new Observable

import { of } from 'rxjs';
import { first } from 'rxjs/operators';

map((x: number) => x * x)(of(1, 2, 3)).subscribe(v => console.log(`Value: ${v}`));
first()(of(5, 7, 9)).subscribe(v => console.log(`First value: ${v}`));

import { interval } from 'rxjs';

const second = document.getElementById('second');
const observable5 = interval(1000).subscribe(v => {
  second.innerHTML = v.toString();
});

// creation operators

// ajax

import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const ajax$ = ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
  map(userResponse => {
    console.log(`users:`, userResponse);
    return userResponse;
  }),
  catchError(error => {
    console.log('error', error);
    return of(error);
  })
);
ajax$.subscribe(x => console.log(x));

// from

import { from } from 'rxjs';
import { take } from 'rxjs/operators';

const array: number[] = [10, 20, 30];
const result = from(array);
result.subscribe(x => console.log(x));

function* generateDoubles(seed: number) {
  let i = seed;
  while (true) {
    yield i;
    i = 2 * i;
  }
}

const iterator = generateDoubles(3);
const result2 = from(iterator).pipe(take(10));
result2.subscribe(x => console.log(x));

// fromEvent

const header = document.getElementById('header');
const clicksInDocument = fromEvent(document, 'click');
const clicksInHeader = fromEvent(header, 'click');

clicksInDocument.subscribe(() => console.log('document'));
clicksInHeader.subscribe(() => console.log('header'));

// range

import { range } from 'rxjs';

const numbers = range(1, 10);
numbers.subscribe(x => console.log(x));

// join creation operators

// merge

import { merge } from 'rxjs';

const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// race

import { race } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const obs1 = interval(1000).pipe(mapTo('fast one'));
const obs2 = interval(3000).pipe(mapTo('medium one'));
const obs3 = interval(5000).pipe(mapTo('slow one'));

race(obs3, obs1, obs2)
.subscribe(
  winner => console.log(winner)
);

// transformation operators

// buffer

import { buffer } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const intervalEvents = interval(1000);
const buffered = intervalEvents.pipe(buffer(clicks));
buffered.subscribe(x => console.log(x));

// pluck

import { pluck } from 'rxjs/operators';

const ajax2$ = ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
  pluck('id')
);
ajax2$.subscribe(x => console.log('User id: ', x));

// filtering operators

// filter

import { filter } from 'rxjs/operators';

const numbers2 = of(1, 2, 3, 4, 5, 6);
const even = numbers2.pipe(filter(n => n % 2 == 0));
even.subscribe(x => console.log(x));

// utility operators

// tap

import { tap } from 'rxjs/operators';

const ajax3$ = ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
  tap((x: {title: string}) => console.log(x.title)),
  map(x => x)
);
ajax3$.subscribe(x => console.log(x));

// SUBSCRIPTION

const observable6 = interval(4000);
const observable7 = interval(3000);

const subscription = observable6.subscribe(x => console.log('Observable 6', x));
const childSubscription = observable7.subscribe(x => console.log('Observable 7', x));

subscription.add(childSubscription);

setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
  console.log('Both subscription end!');
}, 10000);