
//3.3 Please solve this problem:

//https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
};
console.log(repeatStringNumTimes("abc", 3));

//3.3.1: with a for loop.

function repeatStringNumTimes1(str, num) {
    if (num < 0) {
        return " ";
    }
    var newString = "";
    for (var i = 0; i < num; i++) {
        newString += str;
    }
    return newString;
}
console.log(repeatStringNumTimes1("abc", 3));

//3.3.2: with a while loop.
function repeatStringNumTimes2(str, num) {
    var newString2 = "";
    while (num > 0) {
        newString2 += str;
        num--;
    }
    return newString2;

}
console.log(repeatStringNumTimes2("abc", 3));

//3.3.3: with a do...while loop.
function repeatStringNumTimes3(str, num) {         //NEED TO COME BACK TO
    var newString3 = "";
    do {
        newString3 += str;
        num--;
    } while (num > 0);
    return newString3
}
console.log(repeatStringNumTimes3("abc", 3));
