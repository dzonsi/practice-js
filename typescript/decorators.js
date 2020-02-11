// decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
class C {
    method() { }
}
__decorate([
    f(),
    g()
], C.prototype, "method", null);
// class decorators
// declared just before a class declaration
// applied to constructor of the class
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let Greeter = class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
};
Greeter = __decorate([
    sealed
], Greeter);
function classDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = "new property";
            this.hello = "override";
        }
    };
}
let Greeter2 = class Greeter2 {
    constructor(m) {
        this.property = "property";
        this.hello = m;
    }
};
Greeter2 = __decorate([
    classDecorator
], Greeter2);
console.log(new Greeter("world"));
// method decorators
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Greeter3 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false)
], Greeter3.prototype, "greet", null);
// accessor decorators
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
__decorate([
    configurable(false)
], Point.prototype, "x", null);
__decorate([
    configurable(false)
], Point.prototype, "y", null);
