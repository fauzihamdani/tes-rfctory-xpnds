function hitungArray() {
    var nilaiArray = [1, 2, 33, 44, 55, 33, 44, 22, 44, 33, 2, 77, 66, 1, 2, 3, 4, 5, 6, 7, 89, 3, 3, 8, 9, 75, 4, 3, 2, 2, 1, 3];

    // membuat variable berdasarkan kelompok
    var kelompokPertama = [];
    var kelompokKedua = [];
    var kelompokKetiga = [];

    // buat perulangan untuk memasukan nilai ke masing2 array kelompok berdasarkan jumlah perulangan
    var iteration1 = 0;
    var iteration2 = 0;
    var iteration3 = 0;
    for (let i = 0; i < nilaiArray.length; i++) {

        if (i >= 0 && i <= 11) {

            kelompokPertama[iteration1] = nilaiArray[i];
            iteration1 += 1;
        }

        else if (i >= 12 && i <= 21) {

            kelompokKedua[iteration2] = nilaiArray[i];
            iteration2 += 1;
        }

        else if (i > 21 && i <= 31) {

            kelompokKetiga[iteration3] = nilaiArray[i];
            iteration3 += 1;
        }
    }

    console.log('Kelompok Array Pertama mempunyai', '\n', descendingArray(kelompokPertama), '\n', total(kelompokPertama), '\n', average(kelompokPertama), '\n', minMax(kelompokPertama), '\n');
    console.log('Kelompok Array Kedua mempunyai', '\n', descendingArray(kelompokKedua), '\n', total(kelompokKedua), '\n', average(kelompokKedua), '\n', minMax(kelompokKedua), '\n');
    console.log('Kelompok Array Ketiga mempunyai', '\n', descendingArray(kelompokKetiga), '\n', total(kelompokKetiga), '\n', average(kelompokKetiga), '\n', minMax(kelompokKetiga), '\n');


}

hitungArray();


// Fungsi Descending Array
function descendingArray(inputArray) {
    var temp = [];

    for (let i = 0; i < inputArray.length; i++) {

        for (let j = i; j < inputArray.length; j++) {

            if (inputArray[i] < inputArray[j]) {
                temp[i] = inputArray[i];
                inputArray[i] = inputArray[j];
                inputArray[j] = temp[i];
            }

        }

    }

    return `Urutan array: ${inputArray}`;
}


// Fungsi Total Penjumlahan Dan Total Items
function total(inputArray) {
    var panjangArray = inputArray.length;
    var hasilJumlah = 0;

    for (let i = 0; i < inputArray.length; i++) {
        hasilJumlah += inputArray[i];
    }

    return (`total item pada Array terdapat ${panjangArray} items dan total penjumlahan adalah ${hasilJumlah}`);
}



// Fungsi Mencari Rata-rata
function average(inputArray) {
    var jumlahBagi = inputArray.length;
    var hasilJumlah = 0;

    for (let i = 0; i < inputArray.length; i++) {
        hasilJumlah += inputArray[i];
    }

    var result = hasilJumlah / jumlahBagi;

    return (`Nilai rata-rata pada array adalah ${result}`);
}



// Fungsi mencari nilai Terendah dan Tertinggi
function minMax(inputArray) {
    var maxValue = inputArray[0];
    var minValue = inputArray[0];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > maxValue) {
            maxValue = inputArray[i];
        }
        else if (inputArray[i] < minValue) {
            minValue = inputArray[i];
        }
    }
    return (`Mempunya nilai terbesar: ${maxValue} dan nilai terkecil: ${minValue}`);
}