// Kamu diminta untuk melakukan analisa sederhana mengenai

// // 1. Apa itu synchronous?
// // 2. Apa itu asynchronous?
// // 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// // 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// // 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// // 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// for (var i = 1; i<=5; i++) {
//   console.log("first log: ", i); // 01 - Pertama
//   setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
// }
// Soal - 02
// Buatlah file 02-asynchronous.js dan copy template soal di bawah. Lalu berikan jawaban tersebut pada 02-asynchronous.js.

// Kamu diminta untuk membuat sebuah fungsi yang akan melakukan pengecekan apakah seseorang sudah memasuki usia dewasa atau tidak, berikut adalah deskripsi fungsi tersebut:

// name => isR18Plus
// parameter
// age [Number] => usia user dalam satuan tahun
// return value => Promise
// mengembalikan "anda sudah dewasa" menggunakan resolve apabila age user sudah melebihi 18 tahun
// mengembalikan "anda masih dibawah umur" menggunakan reject apabila age user sudah kurang dari 18 tahun
// clue
// gunakan Promise
// resolve dapat kita gunakan untuk mengembalikan hasil yang benar
// reject dapat kita gunakan untuk mengembalikan hasil yang salah
// Error dapat kita gunakan untuk mengembalikan nilai berupa reject
// const isR18Plus = ( .... ) => { .... }
// const printR18Plus = async () => {
//   const underAge = await isR18Plus(10);
//   const properAge = await isR18Plus(19);

//   console.log(underage);
//   console.log(properAge);
// }

// printR18Plus();
// Soal - 03
// Buatlah file 02-asynchronous.js dan copy template soal di bawah. Lalu berikan jawaban tersebut pada 03-asynchronous.js.

// Kamu diminta untuk membuat sebuah fungsi getGitHubUser yang akan mengambil profile dari seorang user pada platform GitHub, fungsi tersebut memiliki deskripsi sebagai berikut:

// nama => getGitHubUser
// description => mengambil profile seorang user yang telah terdaftar pada platform GitHub
// parameter
// username [String] => username yang sudah terdaftar pada GitHub
// return value
// mengembalikan null apabila parameter bernilai kosong
// mengambalikan Object apabila user telah ditemukan
// mengembalikan "not found" apabila tidak menemukan user dengan username yang telah dimasukan oleh user
// clue
// gunakan fungsi fetch untuk mendapatkan data dari GitHub API
// gunakan konsep asynchronous untuk menggambil data menggunakan fetch
// gunakan try catch untuk error handling
// berikut merupakan endpoint yang dapat kalian gunakan untuk mendapatkan data dari GitHub API
// const getGitHubUser = ( .... ) => { .... }
// const printGitHubUser = async () => {
//   const mojombo = await getGitHubUser("mojombo");
//   const orange = await getGitHubUser("");
//   const rudiTabuti = await getGitHubUser("rudi.tabuti");

//   console.log(mojombo);
//   console.log(orange);
//   console.log(rudiTabuti);
// }

// printGitHubUser();