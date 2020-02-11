// mixins
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
// sisposable mixin
class Disposable {
    dispose() {
        this.isDisposed = true;
    }
}
// activatable mixin
class Activatable {
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
class SmartObject {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }
    interact() {
        this.activate();
        this.dispose();
    }
}
applyMixins(SmartObject, [Disposable, Activatable]);
let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);
