// function checkPassword(password) {

//     if (password.length<8) {
//         console.log("Password is sufficient, don't have 8 characters!");
//         return;
//     } 

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
//         console.log("Password is STRONG");
//     } else if ((upperCase>0 || specChar>0) && password.length>=8) {
//         console.log("Password is MEDIUM STRONG");
//     } else {
//         console.log("Password is WEAK");
//     }
// }

//  let checkCount = 0;

// do {
    
//     let input = prompt( "Enter your password:");
//     checkPassword(input);
//     checkCount++;
//  } while (checkCount<5)


// function analyzeNumbers(startDig, endDig) {

//     let localStartDig = 0;
//     let localEndDig = 0;

//     if (startDig> endDig) {
//         localStartDig = endDig;
//         localEndDig = startDig;
//     } else {
//         localStartDig = startDig;
//         localEndDig = endDig;
//     }
 
//     let oddCopunt = 0;
//     let evenCount = 0;
//     //divides by 3 and 5
//     let specOdCount = 0

//     let positiveSum = 0;
//     let negativeSum = 0;
//     let sum = 0;
//     let biggestDivBySeven;

//     for (let digit = localStartDig; digit <= localEndDig; digit++) {
        
//         //interval digits sum
//         sum+=digit;

//         //Biggest digit that divides by 7 without fraction
//         if (digit%7===0 && (biggestDivBySeven===undefined || digit>biggestDivBySeven)) {
//             biggestDivBySeven = digit;
//         }
//         if (digit>0) {
//             positiveSum+=digit;
//         } else {
//             negativeSum+=digit;
//         }

//          if (digit%2===0) {
//             evenCount++;
//          } else {
//             oddCopunt++;
//           if (digit%3===0 && digit%7===0)  {
//             specOdCount++
//           }
//          }
//     }
//     //Print results
//     console.log("Even numbers count:", evenCount);
//     console.log("Odd numbers count:", oddCopunt);
//     console.log("Numbers count that divides by 3 and 5 without fraciton:", specOdCount);
//     if (biggestDivBySeven===undefined) {
//         console.log("No number that divides by 7");
//     } else {
//           console.log("Biggest number that divides by 7", biggestDivBySeven);
//     }
//     console.log("Median count:", sum/(localEndDig - localStartDig));

// }

//     let rangeStart = prompt( "Enter range start number:");
//     let rangeEnd = prompt( "Enter range end number:");
//     analyzeNumbers(parseInt(rangeStart), parseInt(rangeEnd));


function simulateAccount(accountValue, monthsLeft) {

    for (let index = 0; index < monthsLeft; index++) {
        
        
    }

}