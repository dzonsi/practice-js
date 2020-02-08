// interfaces
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function printLabelInter(labeledObj) {
    console.log(labeledObj.label);
}
printLabelInter(myObj);
function createSquare(config) {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: 'dodgerblue' });
console.log(mySquare);
let newSquare = createSquare({ color: 'mediumseagreen', width: 25 });
console.log(newSquare);
let p1 = {
    x: 10,
    y: 20
};
// p1.x = 5; error! readonly propetie
let a = [1, 2, 3, 4];
let ro = a;
// ro[0] = 12; error!
let b = ro;
console.log(b);
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
// or
let secondSearch;
secondSearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
let square = {};
square.color = 'blue';
square.sideLength = 10;
console.log(square);
let all = {};
all.color = 'linen';
all.sideLength = 12;
all.penWidth = 5.0;
console.log(all);
