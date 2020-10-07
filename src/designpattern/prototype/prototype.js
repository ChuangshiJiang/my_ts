//es6中引入的类，实际上是JavaScript现有的基于原型的继承的语法糖
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat () {
        console.log('肉鼓头真好吃');

    }
}

function Dog (name, age) {
    this.name = name;
    this.age = age;
}

Dog.prototype.eat = function () {
    console.log('肉骨头真好吃');

}

