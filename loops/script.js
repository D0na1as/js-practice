console.log("labas")


// for loop

// console.log("----- Nuo 1 iki 10 -----")
// for (let index = 1; index < 10; index++) {
//     console.log(index);
// }

// console.log("----- Nuo 10 iki 1 -----")
// for (let index = 10; index > 0; index--) {
//     console.log(index);
// }

// console.log("----- Kas antras skaicius -- 1var ---")
// for (let index = 1; index < 10; index+=2) {
//     console.log(index);
// }

// console.log("----- Kas antras skaicius -- 2var ---")
// for (let index = 1; index < 10; index++) {
//     console.log(index+2);
// }

// console.log("----- Kas antras skaicius -- 2var ---")
// for (let index = 1; index < 10; index++) {
//     console.log(index+2);
// }

// console.log("-----Skaiciai padauginti is 2---")
// for (let index = 1; index < 10; index++) {
//     console.log(index*2);
// }

// console.log("----- Panaudoti break ties 3 ---")
// for (let index = 1; index < 5; index++) {
//     console.log(index);
//     if (index===3) {
//         break;
//     }
// }

// console.log("----- Panaudoti continue ties 7 ---")
// for (let index = 1; index < 10; index++) {
//         if (index===7) {
//         continue;
//     }
//     console.log(index);
// }

// //Advanced
// // 1

// function checkPassword(password) {

//     let upperCase = 0;
//     let lowerCase = 0;
//     let specChar = 0;

//     for (let index = 0; index < password.length; index++) {
        
//         if (!password[index].match(/[a-z]/i)) {
//             specChar++;
//         } else if (password[index]===password[index].toUpperCase()) {
//             upperCase++;
//         } else if (password[index]===password[index].toLowerCase()) {
//             lowerCase++;
//         }    
//     }

//      console.log(`upperCase: ${upperCase}, lowerCase: ${lowerCase}, specChar: ${specChar}`);

//     if (upperCase>0 && specChar>0 && password.length>=8) {
//         console.log("Password is sufficient");
//     } else {
//         console.log("Password is WEAK");
//     }
// }

// let input = prompt( "Enter your password:");

// checkPassword(input)

// function reverseObject(inputObject) {

//     let tempObject = '';

//     for (let index = 0; index < inputObject.toString().length; index++) {
//         tempObject=inputObject.toString()[index] + tempObject;
//     }
//     console.log(tempObject);
//     return tempObject;

// }

// reverseObject(3211)
// reverseObject("How are you?")

// function biggestNumber(number) {

//     let digits = number.toString();
//     let biggestDigit = digits[0];

//     for (let index = 1; index < digits.length; index++) {
//         if (biggestDigit<digits[index]) {
//             biggestDigit=digits[index];
//         }
//     }
//     console.log(biggestDigit);
//     return biggestDigit;

// }

// biggestNumber(32165478)


// function luckyNumber(number) {

//     let isLucky = false;
//     let digits = number.toString();

//     if (digits.length<3) {
//         return isLucky;
//     }

//     for (let index = 0; index < digits.length; index++) {
//         if (digits[index]!==digits[digits.length-index-1]) {
//             break
//         }
//         if (index==2) {
//             isLucky=true;
//             break;
//         }
//     }
//     console.log(isLucky);
//     return isLucky;

// }

// luckyNumber(5123321)



// //2

//for in loop

// console.log("-******************* FOR in");

// let student = {
//     name: "Jonas",
//     age: 16,
//     group: "HDS4556"
// }

// // Print key
//  console.log("----------- Print key");
// for (const key in student) {
//     console.log(key);
// }

// // Print value
//  console.log("---------- Print value");
// for (const key in student) {
//     console.log(student[key]);
// }

// // Print key and value
//  console.log("---------- Print key and value");
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`);
// }


// console.log("-******************* FOR of");
// let text = "Ananasas"
// let countA = 0;
// for (const element of text) {
//     if (element === "a") {
//         countA++;
//     }
// }
// console.log(countA);


// let currentDate = new Date();
// console.log(currentDate);

// console.log("-******************* Date object miliseconds using FOR in");


const testObject = {
    me: 33,
    father: 55,
    grandmother: 77,
    grandfather2:88
}


const validator = 65;
console.log(`How many are over ${validator}?`)
let howManyOverValidator = 0;
for (const key in testObject) {
    if (testObject[key]>validator) {
        howManyOverValidator++
    }
}

console.log(howManyOverValidator)

console.log(`How many are over ${validator}?`)
let odd = 0;
let even = 0;
for (const key in testObject) {
    if (testObject[key]%2==0) {
        even++;
    } else {
        odd++;
    }
}
console.log(`Even count: ${even}, Odd count: ${odd}`)

// console.log("-******************* Date object properties using FOR in");
// let propertiesCount = 0;
// for (const key in currentDate) {
//     propertiesCount++;
// }
//     console.log(propertiesCount);

//     console.log("-******************* Date object properties divides by 2 FOR in");
// let dividesBy = 0;
// let notDividesBy = 0;

// // for (const key in currentDate) {
// //     if ()
// // }
// //     console.log(propertiesCount);


// console.log('---- WHILE loop -----')

// let i = 1;

// while (i<10) {
//     console.log(i);
//     i++;
// }

// console.log('---- WHILE loop TASKS-----')

// console.log('---- Nuo 1 iki 10 -----')

// let j = 1;

// while (j<10) {
//     console.log(j);
//     j++;
// }

// console.log('---- Nuo 10 iki 1 -----')
// let k = 10;

// while (k>1) {
//     console.log(k);
//     k--;
// }

// console.log('---- Nuo 1 iki 10 nelyginiai -----')

// let l = 1;

// while (l<10) {
//     if (l%2!=0) {
//     console.log(l);
//     }
//     l++;
// }

// console.log('---- Nuo 1 iki 10 lyginiai -----')

// let m = 1;

// while (m<10) {
//     if (m%2==0) {
//     console.log(m);
//     }
//     m++;
// }

// console.log('---- DO WHILE loop TASKS medium counter-----')

// let input = 0;
// let doCount = 0;
// let doSum = 0;

// do {
//     input = prompt( "Enter digit. Quit by entering negative number:");
//     doCount++;
//     doSum +=parseInt(input);
//     console.log(`Current sum: ${doSum}`);
//     console.log(`Current count: ${doCount}`);

// } while (input >=0)

// if (doCount>0) {
//     console.log("Medium entered digit value");
//     console.log(doSum/doCount);
// } else {
//     console.log("No digit was entered");
// }

// console.log('---- DO WHILE loop TASKS random guesser-----')

// let input = -2;
// let randomNumber = -1;

// do {
//     randomNumber = Math.floor(Math.random() * 10);
//     input = parseInt(prompt( "Guess a number. Quit by entering negative number:"));
//     console.log(randomNumber);
//     console.log(input);

//     if (input<0) {
//         console.log("See'ya next time");
//         break;
//     } else if (input==randomNumber) {
//         console.log("Great!. Correct guess. Finnished the task!");
//     } else {
//         console.log(`Number was ${randomNumber}. You guessed ${input}`);
//     }
// } while (input != randomNumber)

 


