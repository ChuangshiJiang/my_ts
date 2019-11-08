var BirthWhisperer = /** @class */ (function () {
    function BirthWhisperer(message) {
        this.chirping = message;
    }
    BirthWhisperer.prototype.chirp = function () {
        return 'Ah~ oh~' + this.chirping;
    };
    return BirthWhisperer;
}());
var birthWhisperer = new BirthWhisperer('coo-coo-coo...Hello');
document.body.innerHTML = birthWhisperer.chirp();
//# sourceMappingURL=hello_ts.js.map