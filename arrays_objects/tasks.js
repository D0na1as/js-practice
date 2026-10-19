console.log(" ---- Array tasks -----")
console.log(" ---- Array tasks --- 1 --")
function addNewElementToArray(array, newElement) {
    let arrayCopy = [...array]
    arrayCopy.push(newElement);
    return arrayCopy;
}

let result1 = addNewElementToArray([], "Naujas elementas");
let result2 = addNewElementToArray(result1, "Kitas elementas");

console.log(result1);
console.log(result2);

console.log(" ---- Array tasks --- 2 --")
function sumArray(array) {
    let sum = 0;
    sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    sum,
    );
    return sum;
}
let result3 = sumArray([1,2,3]);
console.log(`Array suma: ${result3}`);

console.log(" ---- Array tasks --- 3 --")
function sortArray(array) {
    array.sort((a, b) => a - b);
    return array;
}
let result4 = sortArray([21,654,87,3,5874,68]);
console.log(`Surikuotas listass: ${result4}`);

console.log(" ---- Array tasks --- 4 --")
function sliceArray(array, sliceStart) {
    let newArray = array.slice(sliceStart);
    return newArray;
}
let result5 = sliceArray([21,654,87,3,5874,68], 3);
console.log(`Surikuotas listas: ${result5}`);

console.log(" ---- Array tasks --- 5 --")
function concatArray(firstArray, secondArray) {
    let newArray = firstArray.concat(firstArray, secondArray);
    return newArray;
}
let result6 = concatArray([21,654], ["Pirmas elementas", "Antras elementas"]);
console.log(`Surikuotas listass: ${result6}`);

console.log(" ---- Array tasks --- 6 --")
function filterArray(array) {
    let newArray = array.filter((el) => el>10);
    return newArray;
}
let result7 = filterArray([21,6,87,3,5,68]);
console.log(`Filtruoti listas, kurio elementai didesni uz 10: ${result7}`);

console.log(" ---- Array tasks --- 7 --")
function findElement(array) {
    let value = array.find((el) => el>10);
    return value;
}
let result8 = findElement([1 ,4, 21,6,87,3,5,68]);
console.log(`Rasti pirma elementa didesni uz 10: ${result8}`);

console.log(" ---- Array tasks --- 8 --")
function multiplyArray(array) {
    let newArray = array.map((el, index, array) => el*2);
    return newArray;
}

let result9 = multiplyArray([1 ,4, 21,6,87,3,5,68]);
console.log(`Dauginti listo elementus is 2: ${result9}`);