// // Fibonucci ----------------------------------------------------------------------

// let result, a, b;

// a = 0;
// b = 1;
// result = b;

// for (i = 1; i < 100; i++) {
//     document.write(result + "<br/>")
//     result = a + b;
//     a = b;
//     b = result;
// }

// Palindrome ------------------------------------------------------------------------
// let palindrome = function (word) {
//     let len = word.length;
//     let start = word.substring(0, Math.floor(len/2) ).toLowerCase();
//     let end = word.substring(len - Math.floor(len/2)).toLowerCase();
//     let flip = end.split('').reverse().join('');
//     return (start === flip);
// }

// console.log(palindrome('radar'))
// console.log(palindrome('redder'))
// console.log(palindrome('window'))



//FizzBuzz -------------------------------------------------------------------------

// for (i = 1; i < 101; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 5 === 0) {
//         console.log("Fizz")
//     } else if (i % 3 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

//timeout -------------------------------------------------------------------------------------------
//What order will it print?? and why?

// console.log('a');
// let timmy = setTimeout(function () {
//     console.log('b')
// }, 1);
// let timothy = setTimeout(function () {
//     console.log('c')
// }, 10);
// let timer = setTimeout(function () {
//     console.log('d')
// }, 0) 
// console.log('e')


// Async functions ---------------------------------------------------------------------------------

// let num = 0;
// async function increment() {
//     num += await 2; // Promise doesnt run until end of main stack
//     console.log(num)
// }
// increment();
// num += 1;
// console.log(num)

// Which is the output?
// 2, 3
// 1, 3
// 1, 2
// 2, 1
