//自定义类型保护的类型谓词
function isNumber(x) {
    return typeof x === 'number';
}
var result = isNumber(3);
console.log(result);
