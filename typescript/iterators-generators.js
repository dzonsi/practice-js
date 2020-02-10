// iterators and generators
// iterables
// for..of return list of value
let someArray = [1, 'strign', false];
for (let entry of someArray) {
    console.log(entry);
}
// for..in return list of keys
for (let key in someArray) {
    console.log(key);
}
let pets = new Set(['Cat', 'Dog', 'Snake']);
pets['species'] = 'animals';
// for..in inspect properties of object
for (let pet in pets) {
    console.log(pet); // 'species'
}
// for..of inspect values of object
for (let pet of pets) {
    console.log(pet); // 'Cat', 'Dog', 'Snake'
}