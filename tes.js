// for (let i = 1; i < 5; i++) {

//     for (let j = 5; j > i; j--) {
//         process.stdout.write('*');
//     }

//     process.stdout.write('\n');
// }   

var string1 = 'asd ert';
const huruf = 'abcdefghijklmnopqrstuvwxyz';
// var res = string1.replace(string1[0], 'b');
// console.log(res);
let stringRes = [''];

for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== ' ') {
        stringRes[i] = string1.replace(string1[i], 'b');
    }

}
console.log(stringRes);