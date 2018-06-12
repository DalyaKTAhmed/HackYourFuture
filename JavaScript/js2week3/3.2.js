
// 3.2 You must write a function that takes 4 arguments.

/*  A start value and  An end value

    A callback to call if the number is divisible by 3

    A callback to use if the number is divisible by 5

The function should first generate an array containing values from start value to end value (inclusive).

Then the function should take the newly created array and iterate over it, and calling the first callback if the array value is divisible by 3.

The function should call the second callback if the array value is divisible by 5.

Both functions should be called if the array value is divisible by both 3 and 5. */


/**

 * 

 * @param {number} startIndex  the start value 

 * @param {number} stopIndex   the end value

 * @param {function} sayThree  function to call if the number is divided by 3

 * @param {function} sayFive  function to call if the number is divided by 5

 * 

 * @returns {function} sayThree

 * @returns  {function} sayFive

 */

function createArray(startIndex, stopIndex) {
    let arr = [];
    while (startIndex <= stopIndex) {

        arr.push(startIndex++)

    }

    return arr;
}
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

    let arr = createArray(startIndex, stopIndex);

    arr.forEach(element => {
        if (element % 3 === 0) {

            threeCallback();

        }

        if (element % 5 === 0) {

            fiveCallback();

        }

    })

}
threeFive(10, 15, sayThree, sayFive);


function sayThree() {

    console.log("The array value is divisible by three");
}

function sayFive() {

    console.log("The array value is divisible by five");

}