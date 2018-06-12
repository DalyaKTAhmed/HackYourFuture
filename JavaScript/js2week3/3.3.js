

//3.3 Please solve this problem:



//https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string


function repeatStringNumTimesWithFor(str, num) {

    let repeatStr = "";
    for (var i = 0; i < num; i++) {
        repeatStr += str;
    } return repeatStr;
}
console.log('for', repeatStringNumTimesWithFor('abc', 3));


//3.3.2: with a while loop.
function repeatStringNumTimesWithWhile(str, num) {

    var repeatStr = "";

    var i = 0;

    while (i < num) {


        repeatStr += str;

        i++

    }

    return repeatStr;

}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

//3.3.3: with a do...while loop.
function repeatStringNumTimesWithDoWhile(str, num) {
    var repeateStr = "";

    var i = 0;

    do {

        repeateStr += str;

        i++

    } while (i < num)

    return repeateStr;

}
console.log('do...while', repeatStringNumTimesWithDoWhile('abc', 3));