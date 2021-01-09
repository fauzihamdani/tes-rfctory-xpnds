

function tampilAngka(inputAngka) {
    //convert parameter inputAngka menjadi string agar bisa diprosess dalam pengulangan
    var Angka = inputAngka.toString();
    var arrAngka = [];


    // tampilkan angka menjadi pola yang diinginkan
    for (let i = 0; i < Angka.length; i++) {
        arrAngka[i] = Angka[i];
        process.stdout.write(arrAngka[i]);

        for (let j = Angka.length - 1; j > i; j--) {
            process.stdout.write('0');
        }

        process.stdout.write('\n');
    }

}
tampilAngka(1234567);