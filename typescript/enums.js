// enums
// numeric enums
// if value is not set first will be 0
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction['Up']);
var a = Direction.Up;
console.log(a); // 1
var b = Direction[a];
console.log(b); // Up
// why enum Response throw an error???
var Responses;
(function (Responses) {
    Responses[Responses["No"] = 0] = "No";
    Responses[Responses["Yes"] = 1] = "Yes";
})(Responses || (Responses = {}));
function respond(recipient, message) {
    console.log(recipient);
}
// string enums
// don't have reverse mapping
var Directions;
(function (Directions) {
    Directions["Up"] = "UP";
    Directions["Down"] = "DOWN";
    Directions["Left"] = "LEFT";
    Directions["Right"] = "RIGHT";
})(Directions || (Directions = {}));
console.log(Directions.Up);
// heterogeneous enums
// enums can be mixed with string and numeric
var Mixed;
(function (Mixed) {
    Mixed[Mixed["No"] = 0] = "No";
    Mixed["Yes"] = "YES";
})(Mixed || (Mixed = {}));
// computed and constant members
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = '123'.length] = "G";
})(FileAccess || (FileAccess = {}));
// union enums and enum members types
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
let c = {
    //    kind: ShapeKind.Square,  Error! Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
    kind: ShapeKind.Circle,
    radius: 100,
};
let directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
