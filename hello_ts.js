let arr = [1, 'hello', false];
for (let entry of arr) {
    console.log(entry);
}
for (let index in arr) {
    console.log(index);
}
let pets = new Set(['cat', 'dog', 'hamster']);
console.log('pets', pets);
pets['species'] = 'mammals';
for (let pet in pets) {
    console.log(pet);
}
for (let pet of pets) {
    console.log(pet);
}
console.log('pets', pets);
//# sourceMappingURL=hello_ts.js.map