//step4
/*Write a function that would allow you to do this:

const addSix = createBase(6);

addSix(10); // returns 16

addSix(21); // returns 27*/

function createBase(base) {
    const innerFunction = function (number) {
        return base + number;
    };

    return innerFunction;
}

let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));