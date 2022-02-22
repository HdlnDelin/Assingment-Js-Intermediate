SOAL - 01

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

const reverse = (arr) => {
const combineArr = [...arr];
return newArr.reverse();
};

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

SOAL - 02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

const getAverage = (arr) => {
const totalValue = arr.reduce((a, b) => a + b);
const average = totalValue / arr.length;
const aboveAverage = arr.filter((value) => value > average);

return aboveAverage.length;
};

console.log(getAverage(arr1));
console.log(getAverage(arr2));

SOAL - 03
const arr = [[10], [9, 7, 1], [2, 8]];

const searchInArray = (arr, number) => {
const combineArr = arr
    .join()
    .split(',')
    .map((value) => Number(value));

const idx = combineArr.indexOf(number);

if (idx < 0) {
    return null;
} else {
    return idx;
}
};

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));

