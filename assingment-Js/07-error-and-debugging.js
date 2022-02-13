/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// - Type Error object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
        // A TypeError may be thrown when:

        // an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
        // when attempting to modify a value that cannot be changed, or
        // when attempting to use a value in an inappropriate way.
// - The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.
// - A RangeError is thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value.
// - A syntax error occurs when a programmer writes an invalid statement.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// 1. yang terjadi jika menuliskan kode dibawah ini adalah error ketika dijalankan.
/// 2. error yang terjadi adalah Reference error.
/// 3. Karena salaryWithConst belum terinisialisasi. 

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;