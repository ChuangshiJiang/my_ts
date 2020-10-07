
//闭包版
function StorageBase() { }
StorageBase.prototype.setItem = function (key, value) {
    return localStorage.setItem(key, value);
}

StorageBase.prototype.getItem = function (key) {
    return localStorage.getInstance(key);
}

const Storage = (function () {
    let instance = null;
    if (!Storage.instance) {
        Storage.instance = new StorageBase();
    }
    return StorageBase.instance;
})();

const storage1 = Storage();
const storage2 = Storage();

console.log('if equal', storage1 === storage2);

storage1.setItem('name', 'jack');

console.log('storage1.name', storage1.getItem('name'));
console.log('storage2.name', storage2.getItem('name'));

