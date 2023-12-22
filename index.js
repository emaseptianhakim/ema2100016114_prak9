// ! Dont change this code
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
// @ Try to check and change the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "1,3,5"
const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
/**
 * Fungsi filterOddNumber sebelumnya menggunakan num % 2 !== 0 untuk memeriksa angka ganjil, yang seharusnya sebaliknya. 
 * Seharusnya kita menggunakan num % 2 === 0 untuk memeriksa apakah suatu angka adalah angka genap. 
 * Jadi, ada kesalahan dalam logika kondisi pada fungsi tersebut.
   Fungsi filterOddNumber sebelumnya, pada num % 2 !== 0 digunakan untuk memeriksa apakah angka tersebut bukan angka genap. 
   Jadi, dengan filter ini, yang akan tersisa dalam array adalah angka-angka ganjil.
 *Sesudah di perbaharui, kondisi yang digunakan merupakan num % 2 === 0, yang berarti hanya angka genap yang akan lolos filter. 
 Ini sesuai dengan perintah bahwa kita ingin mengembalikan array yang berisi angka-angka genap dari array input.

 Jadi, kesalahan utamanya ada pada logika kondisi yang digunakan dalam fungsi. 
 Untuk memfilter angka genap, kita perlu menggunakan num % 2 === 0.

 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};
