function cariLangkah(inputNumber) {

    // Validasi input harus Int (bilangan bulat)
    if (!isNaN(inputNumber)) {

        // validasi input user: dibawah / sama dengan 100
        if (inputNumber <= 100) {

            // membuat Angka Random dari 1  sampai 100
            var randomNumber = Math.floor(Math.random() * 100) + 1;

            if (randomNumber > inputNumber) {
                var result = randomNumber - inputNumber;
                console.log(`Angka random yang keluar adalah: ${randomNumber} dan angka yang Anda masukan adalah: ${inputNumber}`);
                console.log(`maka membutukan langkah maju sebanyak ${result} langkah`);
            }

            else if (randomNumber < inputNumber) {
                var result = inputNumber - randomNumber;
                console.log(`Angka random yang keluar adalah: ${randomNumber} dan angka yang Anda masukan adalah: ${inputNumber}`);
                console.log(`maka membutukan langkah mundur sebanyak ${result} langkah`);
            }
            else if (randomNumber == inputNumber) {
                console.log(`Angka random yang keluar adalah: ${randomNumber} dan angka yang Anda masukan adalah: ${inputNumber}`);
                console.log(`Angka yang Anda inputkan adalah sama dengan angka random yang keluar`);
            }

        }

        else {
            return (console.log('input harus dibawah 100'));
        }
    }

    else {
        return (console.log('input harus angka'));
    }

}


cariLangkah(12);