// Kamu diminta untuk membuat sebuah fitur login sederhana menggunakan HTML dan JavaSript, berikut adalah langkah-langkah yang dapat kamu ambil untuk menyelesaikan masalah tersebut:

// buat file 07-web-storage-02.html dan 07-web-storage-dummy-data.js
// copy dan paste semua data dari dummy-data.js ke 07-web-storage-dummy-data.js
// cek apakah di dalam sessionStorage sudah terdapat sebuah data dengan kunci "username", apabila iya maka
// hilangkan class d-none pada element dengan id div-username, serta sembunyikan form dengan cara menambahkan class "d-none" serta
// berikan innerHTML element yang memiliki id username dengan isi username yang sudah kita ambil melalui sessionStorage
// Jika belum, maka:
// ambil data username ketika user menekan tombol login
// simpan username kedalam sessionStorage dengan nama kunci "username"
// hilangkan class d-none pada element dengan id div-username, serta sembunyikan form dengan cara menambahkan class "d-none"
// berikan innerHTML element yang memiliki id username dengan isi dari username yang sudah dimasukan oleh user
// Soal - 03
// Kali ini kita akan menambahkan fitur pertemanan pada aplikasi yang sudah kita buat pada pertanyaan sebelumnya dan gunakan sebelumnya yaitu 07-web-storage-02.html dan 07-web-storage-dummy-data.js, fitur tersebut memiliki spesifikasi sebagai berikut:

// seorang user dapat memiliki banyak teman
// user dapat melakukan follow atau unfollow
// follow akan menambahkan teman kedalam data following
// sedangkan unfollow akan menghapus teman dari data following
// serta kita akan menampilkan berapa banyak teman yang sudah kita miliki menggunakan badge yang ada di dalam elemen button
// Berikut merupakan langkah-langkah yang dapat kalian gunakan untuk menyelesaikannya:

// cek apakah di dalam localStorage terdapat sebuah key bernama username dari user yang login saat ini
// apabila data tersebut ditemukan dan user sudah login maka kita perlu:
// menampilkan jumlah teman yang didapatkan dari 07-web-storage-dummy-data.js menggunakan badge, badge berada di dalam element yang memiliki id badge-user
// mengubah button follow menjadi unfollow dan berwarna hijau, apabila orang tersebut sudah ada di dalam daftar teman kita
// menambahkan action di dalam setiap card button
// apabila user tidak ada di dalam daftar pertemanan maka ketika kita menekan tombol follow ia akan:
// menambahkan data orang tersebut kedalam daftar teman. Kemudian kita perlu menyimpan daftar pertemanan tersebut ke dalam localStorage untuk key username yang sekarang sedang login
// ubah teks dari tombol follow menjadi unfollow
// ubah warna tombol menjadi hijau dengan cara menambahkan btn-success, dan jangan lupa untuk menghapus warna tombol sebelumnya
// apabila user sudah ditemukan maka ketika kita menekan tombol unfollow ia akan:
// menghapus orang tersebut dari daftar pertemanan kemudian kita perlu menyimpan ulang daftar pertemanan tersebut ke dalam localStorage untuk key username yang sama
// ubah teks dari tombol unfollow menjadi follow
// ubah warna tombol menjadi biru dengan cara menambahkan btn-primary, dan jangan lupa untuk menghapus warna tombol sebelumnya