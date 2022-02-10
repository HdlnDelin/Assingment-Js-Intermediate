/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for  (let angka = 1; angka <= 100; angka++ ) { 
    let jumlahFaktorPembagi = 0;
    for (let pembagi =1; pembagi <= angka; pembagi++){
        if(angka % pembagi === 0){
            jumlahFaktorPembagi = jumlahFaktorPembagi + 1;
        }
    } 
    if (angka === 1 || jumlahFaktorPembagi  === 2){
        console.log(angka);
    } 
}