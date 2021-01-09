
const huruf = 'abcdefghijklmnopqrstuvwxyz';
const huruf2 = 'fghijklmnopqrstuvwxyzabde';
const hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const hurufBesar2 = 'FGHIJKLMNOPQRSTUVWXYZABDE';
var string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.";

// convert string di atas menjadi array per-kata
var stringArr = string.split(/[ ,]+/);
// console.log(stringArr);

// cocokan huruf a / A
var HitungA = string.match(/a/gi).length; console.log('karakter A berjumlah:', HitungA);
var HitungB = string.match(/b/gi).length; console.log('karakter B berjumlah:', HitungB);
var HitungC = string.match(/c/gi).length; console.log('karakter C berjumlah:', HitungC);
var HitungD = string.match(/d/gi).length; console.log('karakter D berjumlah:', HitungD);

var HitungE = string.match(/e/gi).length; console.log('karakter E berjumlah:', HitungE);
var HitungF = string.match(/f/gi).length; console.log('karakter F berjumlah:', HitungF);
// var HitungG = string.match(/g/gi).length; console.log('karakter G berjumlah:', HitungG);
// var HitungH = string.match(/h/gi).length; console.log('karakter H berjumlah:', HitungH);

// var HitungI = string.match(/i/gi).length; console.log('karakter I berjumlah:', HitungI);
// var HitungJ = string.match(/j/gi).length; console.log('karakter J berjumlah:', HitungJ);
// var HitungK = string.match(/k/gi).length; console.log('karakter K berjumlah:', HitungK);
// var HitungL = string.match(/l/gi).length; console.log('karakter L berjumlah:', HitungL);

// var HitungM = string.match(/m/gi).length; console.log('karakter M berjumlah:', HitungM);
// var HitungN = string.match(/n/gi).length; console.log('karakter N berjumlah:', HitungN);
// var HitungO = string.match(/o/gi).length; console.log('karakter O berjumlah:', HitungO);
// var HitungP = string.match(/p/gi).length; console.log('karakter P berjumlah:', HitungP);

// var HitungQ = string.match(/q/gi).length; console.log('karakter Q berjumlah:', HitungQ);
// var HitungR = string.match(/r/gi).length; console.log('karakter R berjumlah:', HitungR);
// var HitungS = string.match(/s/gi).length; console.log('karakter S berjumlah:', HitungS);
// var HitungT = string.match(/t/gi).length; console.log('karakter T berjumlah:', HitungT);

// var HitungU = string.match(/u/gi).length; console.log('karakter U berjumlah:', HitungU);
// var HitungV = string.match(/v/gi).length; console.log('karakter V berjumlah:', HitungV);
// var HitungW = string.match(/w/gi).length; console.log('karakter W berjumlah:', HitungW);
// var HitungX = string.match(/x/gi).length; console.log('karakter X berjumlah:', HitungX);

// var HitungY = string.match(/y/gi).length; console.log(HitungY);
// var HitungZ = string.match(/z/gi).length; console.log(HitungZ);

// // let result = [];
// for (let i = 0; i < stringArr.length; i++) {
//     result[i] = '';

//     for (let j = 0; j <= stringArr[i].length; j++) {
//         result[i][j] = '';
//         for (k = 0; k < huruf.length; k++) {
//             if (stringArr[i][j] === huruf[k]) {
//                 result[i][j] = huruf2[k];
//             }
//         }


//     }

// }
// console.log("result.....", result);
// console.log(stringArr[0][1]);;



// -----------------------------------

let result = [];
for (let i = 0; i < string.length; i++) {

    for (let j = 0; j < huruf.length; j++) {
        if (string[i] == huruf[j]) {
            result[i] = huruf2[j];
        }
        else if (string[i] == hurufBesar[j]) {
            result[i] = hurufBesar2[j];
        }
    }
}
var finalResult = result.join(' ');
console.log('\n Character Movement:');
console.log(finalResult);
// console.log(finalResult.replace(/\s+s+/, '_'));
