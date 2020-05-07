function deepCopy (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let copy = obj.constructor === Array ? [] : {};
    //遍历对象的key
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}


let person = {
    name: 'jack',
    age: 20,
    eat(){
        console.log('good eat');
    },
};

let personCopy = deepCopy(person);
personCopy.height = 180;
console.log('person',person);
console.log('personCopy',personCopy);

