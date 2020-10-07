//实现Storage，使得该对象为单例，
//基于localStorage进行封装。
//实现方法 setItem(key,value)和 getItem(key).

//静态方法版
class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }
    setItem(key, value) {
        return localStorage.setItem(key, value);
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
}

const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();

console.log('if equal', storage1 === storage2);

storage1.setItem('name', 'jack');
console.log('storage2.name', storage2.getItem('name'));
console.log('storage1.name', storage1.getItem('name'));
