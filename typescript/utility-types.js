// utility types
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign({}, todo, fieldsToUpdate);
}
const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
};
const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});
console.log(todo2);
const todo = {
    title: 'Delete inactive users',
};
const x = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};
const todo3 = {
    title: 'Clean room',
    completed: false,
};
const todo4 = {
    title: 'Clean room',
    completed: false,
};
//InstanceType<T>
// constructs a type consisting of the instance type of a constructor function type T
class C {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
;
const obj = { a: 5 }; // ok
// const obj2: Required<Props> = { a: 7, c: 9 }; error
// const obj3: Required<Props> = { a: 5 }; error
// ThisParameterType
// Extracts the type of the this parameter of a function type,
// or unknown if the function type has no this parameter
function toHex() {
    return this.toString(16);
}
function numberToString(n) {
    return toHex.apply(n);
}
// OmitThisParameter
// removes the 'this' paramter from a function type
// ThisType<T>
