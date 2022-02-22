// Soal - 01
// Kamu diminta untuk memperbaiki baris kode dibawah agar ia dapat menggunakan fungsi yang berada pada file 06-module-helpers.js, ada beberapa hal yang perlu kalian perbaiki diantaranya adalah:

// menambahkan attribute yang diperlukan untuk memanggil sebuah module JavaScript di dalam 06-module.html
// perbaiki proses import fungsi sayHello yang berada di dalam file 06-module.html
// export fungsi sayHello secara "default" agar ia bisa kita panggil secara langsung
// perbaiki proses eksekusi dari fungsi sayHello
// Soal - 02
// Kamu diminta untuk melakukan implementasi terhadap suatu fungsi greeting yang mana akan menampilkan sebuah alert dengan pesan "Hello, $NAME", berikut merupakan langkah-langkah pengerjaannya:

// kita perlu meng-export fungsi greeting, agar ia dapat diakses oleh <script> tag didalam file 06-module.html
// memanggil fungsi greeting didalam file 06-module.html
// ambil data "name" pada saat user menekan tombol submit
// (kamu dapat mengggunakan onclick atau onsubmit)
// implementasikan fungsi greeting serta berikan data "name" sebagai parameter dan letakan hasilnya didalam sebuah variable "message"
// buat sebuah alert yang akan menampilkan isi dari variable "message"
// Soal - 03
// Soal ini berhubungan dengan soal Javascript Intermediate -> 04-regex-with-dom -> soal-04, kamu diminta untuk melakukan hal yang sama yaitu melakukan validasi terhadap inputan user yang berupa email dan password. Pada kesempatan kali ini kita akan melakukan implementasi tersebut menggunakan module, berikut adalah lanngkah-langkah pengerjaanya:

// buat sebuah file dengan nama 06-modules-authentication.js
// ambil fungsionalitas untuk melakukan pengecekan terhadap email dan password dan taruh didalam fungsi dengan spesifikasi berikut:
// nama => validateLoginData
// 2 parameter
// email [String]
// password [String]
// return value [String]
// mengembalikan "tolong masukan email yang valid" apabila email tidak valid
// mengembalikan "tolong masukan password sesuai ketentuan" apabila password tidak valid
// mengembalikan "Welcome to The Jungle" apabila email dan password valid
// masukan fungsi validateLoginData kedalam file 06-module-authentication.js
// export fungsi validateLoginData sebagai export default
// panggil fungsi tersebut didalam file 06-module.html
// ambil data "email" dan "password" pada saat user menekan tombol login
// (kamu dapat mengggunakan onclick atau onsubmit)
// implementasikan fungsi validateLoginData serta berikan data "email" dan "password" sebagai parameter dan letakan hasilnya didalam sebuah variable bernama "message"
// buat sebuah alert yang akan menampilkan isi dari variable "message"