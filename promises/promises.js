let promise1 = new Promise(function(resolve, reject) {
	setTimeout(() => resolve("done!"), 1000);
});

promise1
	.finally(() => console.log('Promise 1 ready'))
	.then(
		result => console.log(result),
		error => console.log(error)
	);

let promise2 = new Promise(function(resolve, reject) {
	setTimeout(() => reject("error!"), 3000);
});

promise2.then(
	result => console.log(result),
	error => console.log(error)
);


let promise3 = new Promise(function(resolve, reject) {
	setTimeout(() => resolve(1), 1000);
}).then(function(result) {
	console.log(result);
	return result * 2;
}).then(function(result) {
	console.log(result);
	return result * 2;
}).then(function(result) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(result * 2), 3000);
	});
}).then(function(result) {
	console.log(result);
	functionThatIsNotDefined();
	return result * 2;
}).catch(error => console.log(error.message));

Promise.all([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
]).then(function(result) {
	console.log(result);
	result.map(eachResult => console.log(eachResult));
}).catch(error => console.log(error.message));

Promise.all([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
	new Promise((resolve, reject) => setTimeout(() => reject(new Error("An error ocured!")), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
]).then(function(result) {
	console.log(result);
	result.map(eachResult => console.log(eachResult));
}).catch(error => console.log(error.message));

if(!Promise.allSettled) {
  Promise.allSettled = function(promises) {
    return Promise.all(promises.map(p => Promise.resolve(p).then(v => ({
      state: 'fulfilled',
      value: v,
    }), r => ({
      state: 'rejected',
      reason: r,
    }))));
  };
}

Promise.allSettled([
	new Promise((resolve, reject) => setTimeout(() => resolve(11), 3000)),
	new Promise((resolve, reject) => setTimeout(() => reject(new Error("An error ocured in allSettled!")), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(33), 1000))
]).then(function(result) {
	console.log(result);
	result.map(eachResult => console.log(eachResult));
}).catch(error => console.log(error.message));

Promise.race([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
	new Promise((resolve, reject) => setTimeout(() => reject(new Error("An error ocured!")), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve("First promise to finish in race!"), 1000))
]).then(function(result) {
	console.log(result);
	result.map(eachResult => console.log(eachResult));
}).catch(error => console.log(error.message));

let promise4 = Promise.resolve();

promise4.then(() => console.log("promise 4 done"));

console.log("code 4 finished"); // this log shows first

let promise5 = Promise.resolve()
	.then(console.log("Promise 5 done"))
	.then(console.log("Code 5 finished"));

// async function always returns a promise
async function first() {
	return "First return!"
}

first().then(function(result) {
	console.log(result);
});

async function second() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("Second function promise!"), 1000);
	});
	let result = await promise;// bez await loguje Promise { <pending> }
	console.log(result);
}
second();


class Thenable {
	constructor(num) {
		this.num = num;
	}
	then(resolve, reject) {
		console.log(resolve);
		setTimeout(() => {
			resolve(this.num * 2)
		}, 1000);
	}
};

async function third() {
	let result = await new Thenable(22);
	console.log(result);
}
third();



async function loadJson(url) {
		const response = await fetch(url);
		if(response.status == 200) {
			const json = await response.json();
			return json;
		}
		throw new Error(response.status);
}


async function demoGithubUser() {
	let name = 'Enter a name';

	try {
		const user = await loadJson(`https://api.github.com/users/${name}`);
		alert(`Full name: ${user.name}.`);
		return user;
	} catch(err) {
		if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
    } else {
        throw err;
    }
	}
}