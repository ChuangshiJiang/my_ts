function calssDecorator(target) {
    target.hasDecorator = true;
    return target;
}

@calssDecorator
class Button{

}

console.log('Button是否被装饰了：',Button.hasDecorator);
