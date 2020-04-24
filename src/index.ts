function greeter(person: string): string {
    return 'hello,' + person;
}

const user = 'Jane User';

let value: unknown;

enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction[0]);

const a = Direction.Up;

interface Say {
    (word: string): string
}

interface User {
    name: string
    age?: number
    readonly isMale: boolean
    say: Say
}

interface VIPUser extends User{
    broadcast: () => void
}

const getUserName = (user: User) => {
    return user.age;
}

interface Config {
    width?: number;
    [propName: string]: any;
}

function CaculateAreas(config: Config): { area: number } {
    let square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return {
        area: square
    }
}

//通过类型断言，传入与接口结构不符的对象字面量
let mySquare = CaculateAreas({ widdth: 55 } as Config);
//

//
abstract class Animal {
    abstract makeSound(): void;
    protected move():void{
        console.log('roaming the earch....');
    }
}

class Cat extends Animal {
    makeSound(){
        console.log('miao miao');
    };
    move(){
        console.log('movemove');
    }
}

const animal = new Cat();

animal.makeSound();
animal.move();