

/*Write a function takes this array['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only has unique values in it

(so it removes the duplicate ones).*/


originalArr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
function removeDoublicate(newArr) {

    return [...new Set(newArr)]; //The constructor of Set takes a duplicated object, like Array, 

    //and the spread operator ... transform the set back into an Array.

}

console.log(removeDoublicate(originalArr)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]