## Description
> Buatlah sebuah file sesuai dengan nama `06-scope.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang tertulis pada kolom komentar

```Javascript
/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE

//variabel yang dimiliki oleh Javascript adalah 3 yaitu Global Scoope,Local/function Scoope dan Block Scoope.
//-Global scoope adalah variable bisa diakses diruang lingkup mana saja
//-Local/function adalah hanya dapat diakses oleh function pembungkusnya.
//-Block scoope adalah variable yang dideklarasikan didalam curly bracket.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson"; // termasuk variable global scope dimana  variable tersebut bisa diakses diruang lingkup mana saja

function printFirstName(name) {
  return name.split(" ")[0]; // name disini merupakan sebuah parameter dari funtion printFirstName yang tergolong ke dalam kategori local scoope,dan hanya dapat diakses oleh function ini saja.
}

console.log(printFirstName("Mariah Carey")); // outpunya adalah "Mariah" alasannya karena function printFirstName itu meberikan arguman "Mariah Carey" dan funtion printFirstNamw mengembalikan value berupa nama depan saja.
```

## Key Learning Points
- memahami konsep dari *variable scope*
- memahami perbedaan dari `var`, `let`, dan `const`