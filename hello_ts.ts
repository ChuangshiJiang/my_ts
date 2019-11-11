import validator from './export_test.js';

let strings: string[] = ['Hello', '98025', '101'];

strings.forEach(element => {
  console.log(`"${element}" ${validator(element)}?"matches":"does not match"`);
});
