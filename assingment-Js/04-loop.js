/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
// for  (let angka = 1; angka <= 100; angka++ ) { 
//     let jumlahFaktorPembagi = 0;
//     for (let pembagi =1; pembagi <= angka; pembagi++){
//         if(angka % pembagi === 0){
//             jumlahFaktorPembagi = jumlahFaktorPembagi + 1;
//         }
//     } 
//     if (angka === 1 || jumlahFaktorPembagi  === 2){
//         console.log(angka);
//     } 
// }

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
///let primeCounter = 0;
// let fiftiethPrime;

/// EDIT HERE
jawaban:

// let primeCounter = 0;
// let fiftiethPrime = 0;
// let i = 1;
// while (primeCounter < 50) {
//     i++;
//     var eliminasi = false;
//     for (let n = 2; n <= i; n++) {
//         if (i%n==0 && i!==n) {
//             eliminasi = true;
//         }
//     }
//     if (eliminasi == false) {
//                 primeCounter++;  // 2 3 5 7 .. 
//                 fiftiethPrime = i;
//     }
// }
// // console.log(primeCounter);
// console.log(fiftiethPrime)



/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd = 0;
let i = 0;

do {
    if (i % 2 !== 0){
    fiftiethOdd = i;
    oddCounter++;
}
i++;
} while (oddCounter < 50);
console.log(fiftiethOdd)
