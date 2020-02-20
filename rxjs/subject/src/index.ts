// SUBJECT

// Subject is special type of Observable
// that allows values to be multicasted
// to many Observers
// Observables are unicast (each subscriber
// Observer owns an independent execution of Observable )
// Subject are multicast !!!
// Can emit value to many Observers

import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(1);
subject.next(2);

// Subject are observers

import { from } from 'rxjs';

const observable = from([1, 2, 3]);

observable.subscribe(subject);

// Multicasted Observables

import { multicast } from 'rxjs/operators';
import { ConnectableObservable } from 'rxjs';

const source = from([1, 2, 3, 4]);

const subject2 = new Subject();

const multicasted = source.pipe(multicast(subject2));

multicasted.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

multicasted.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

(multicasted as ConnectableObservable<number[]>).connect();

// reference counting

import { interval } from 'rxjs';

const source3 = interval(500);
const subject3 = new Subject();
const multicasted3 = source3.pipe(multicast(subject3));
let subscription1: any, subscription2: any, subscriptionConnect: any;

subscription1 = multicasted3.subscribe({
  next: (v) => console.log(`observerA3: ${v}`)
});
// first subscriber to 'multicsted3' is interested
// in cosuming values
subscriptionConnect = (multicasted3 as ConnectableObservable<number[]>).connect();

setTimeout(() => {
  subscription2 = multicasted3.subscribe({
    next: (v) => console.log(`observerB3: ${v}`)
  });
}, 600);

setTimeout(() => {
  subscription2.unsubscribe();
}, 2000);

setTimeout(() => {
  subscriptionConnect.unsubscribe();
}, 3000);

// refCount

// refCount makes the multicasted Observable
// automatically start executing when the
// first subscriber arrives, and stop
// executing when the last subscriber leaves

import { refCount } from 'rxjs/operators';

const source4 = interval(500);
const subject4 = new Subject();
const refCounted = source4.pipe(multicast(subject4), refCount());
let subscription3: any, subscription4: any;

// this calls connect(), because it is
// the first subscriber to 'refCounted'

console.log('observerA4 subscribed');
subscription3 = refCounted.subscribe({
  next: (v) => console.log(`observerA4: ${v}`)
});

setTimeout(() => {
  console.log('observerB4 subscribed');
  subscription4 = refCounted.subscribe({
    next: (v) => console.log(`observerB4: ${v}`)
  });
}, 600);

setTimeout(() => {
  console.log('observerA4 unsubscribed');
  subscription3.unsubscribe();
}, 1200);

// this is when the shared Observable execution
// will stop, because 'refCounted' would
// have no more subscribers after this

setTimeout(() => {
  console.log('observerB4 unsubscribed');
  subscription4.unsubscribe();
}, 2000);

// The refCount() method only exists on
// ConnectableObservable, and it returns
// an Observable, not antoher ConnectableObservable

// BehaviorSubject

// BehaviorSubject has a notion of 'the current value'
// It stores the latest value emitted to its consumers
// and whenever a new Observer subscribes,
// it will immediately receive the "current value" from the BehaviorSubject

import { BehaviorSubject } from 'rxjs';

const subject5 = new BehaviorSubject(0);// initial value

subject5.subscribe({
  next: (v) => console.log(`observerA5: ${v}`)
});

subject5.next(1);
subject5.next(2);

subject5.subscribe({
  next: (v) => console.log(`observerB5: ${v}`)
});

subject5.next(3);


// ReplaySubject

// A ReplaySubject records multiple values
// from the Observable execution and
// replays them to new subscribers

import { ReplaySubject } from 'rxjs';

// buffer 3 values for new subscribers
const subject6 = new ReplaySubject(3);

subject6.subscribe({
  next: (v) => console.log(`observerA6: ${v}`)
});

subject6.next(1);
subject6.next(2);
subject6.next(3);
subject6.next(4);

subject6.subscribe({
  next: (v) => console.log(`observerB6: ${v}`)
});

subject6.next(5);

// window time determine how old the
// recorded values can be

const subject7 = new ReplaySubject(100, 500);

subject7.subscribe({
  next: (v) => console.log(`observerA7: ${v}`)
});

let i = 1;
var timeInterval = setInterval(() => subject7.next(i++), 200);

setTimeout(() => {
  subject7.subscribe({
    next: (v) => console.log(`observerB7: ${v}`)
  });
}, 1000);

setTimeout(() => {
  clearInterval(timeInterval);
}, 3000);

// AsyncSubject

// Only the last value of the Observable
// execution is sent to its observes,
// and only when the execution completes

import { AsyncSubject } from 'rxjs';

const subject8 = new AsyncSubject();

subject8.subscribe({
  next: (v) => console.log(`observerA8: ${v}`)
});

subject8.next(1);
subject8.next(2);
subject8.next(3);
subject8.next(4);

subject8.subscribe({
  next: (v) => console.log(`observerB8: ${v}`)
});

subject8.next(5);
subject8.complete();


// Scheduler

// A Scheduler lets you define in what
// execution context will an Observable
// deliver notifications to its Observer

import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

const observable2 = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}).pipe(
  observeOn(asyncScheduler)
);

console.log('just before subscribe');

observable2.subscribe({
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
     console.log('done');
  }
});

console.log('just after subscribe');