
//3.7 Here are two functions that look like they do the something similar but they print different results.Please explain what's going on here.

const x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);

const y = { x: 9 }; // y is a reference to the object
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
/*The first function: x is passed to the func as a value and that means the func has a copy of the variable x.
 Any changes inside the func will not effect x.
 
 The second function: the reference of x is passed to the function 
 that means the reference points to the original memory location that holds the variable x.
 Any changes inside the func will effect the variable x that were outside the func.*/