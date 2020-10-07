// JavaScript设计模式核心原理与应用实践示例
class MobilePhoneFactory {
    createOS() {
        console.log('抽象工厂方法不允许直接调用，你需要将我重写！');

    }
    createHardWare() {
        console.log('抽象工厂方法不允许直接调用，你需要将我重写！');

    }
}

class OS {
    controlHardWare() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}

class Andriod extends OS {
    controlHardWare() {
        console.log('我会用安卓的方式调用硬件');
    }
}

class Apple extends OS {
    controlHardWare() {
        console.log('我会用苹果的方式调用硬件');

    }
}


class HardWare {
    operateByOrder() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}

class QualcommHardWare extends HardWare {
    operateByOrder() {
        console.log('我会用高通的方式去运作');

    }
}

class MiWare extends HardWare {
    operateByOrder() {
        console.log('我会用小米的方式去运作');

    }
}

class FakeStarFactory extends MobilePhoneFactory {
    createOS() {
        return new Andriod();
    }

    createHardWare() {
        return new QualcommHardWare();
    }
}

const myPhone = new FakeStarFactory();
const myOS = myPhone.createOS();
const myHardWare = myPhone.createHardWare();

myOS.controlHardWare();

myHardWare.operateByOrder();