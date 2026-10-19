console.log("labas")

//1
const arrayTest = [];

arrayTest[0] = "Jonas";
arrayTest[1] = 6;

console.log(arrayTest);

//2
const arrayTest2 = [1,6,7,9,7,321,132,4655];
console.log(arrayTest2);

//3
const arrayTest3 = new Array("Apple", "Bannana", "Watermelo");
console.log(arrayTest3);

//4 
const arrayTest4 = Array.of("Hammer", "Nail", "Shovel");
console.log(arrayTest4);

//5
const arrayTest5 = [];
arrayTest5.push("pushed Apple");
arrayTest5.push("pusher Bannana");
console.log(arrayTest5);

//6
let text = "Sakinys ikeliamas i masyva";
const arrayTest6 = text.split();
const arrayTest7 = text.split("");
const arrayTest8 = text.split(" ");
console.log(arrayTest6);
console.log(arrayTest7);
console.log(arrayTest8);

//7
let textForiterator = "Elementas";
const arrayTest9 = new Array(10).fill(textForiterator);
console.log(arrayTest9);

//Array metodai (kiti skaidrese)
const testArray = [1,6,7,9,7,321,132,"Paskutinis"];
console.log(Array.isArray(testArray));
console.log(Array.isArray("Array text"));

console.log(" --- Array value with index ----")
console.log(testArray.length);
console.log(testArray[testArray.length-1]);
console.log(testArray.at(-1));

//Array destruction
const testArray10 = [1,6,7,9,7,321,132,"Paskutinis"];
const [
    firstItem,
    secondItem,
] = testArray10;
console.log(firstItem);
console.log(secondItem);




