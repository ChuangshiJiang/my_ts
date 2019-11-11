import validator from './export_test.js';
let strings = ['Hello', '98025', '101'];
strings.forEach(element => {
    console.log(`"${element}" ${validator(element)}?"matches":"does not match"`);
});
//# sourceMappingURL=hello_ts.js.map