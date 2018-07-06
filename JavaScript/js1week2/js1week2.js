

//1. Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";


//1.1 Add the string to your file and log it.
console.log(myString);

//1.2 Log the length of myString.
console.log("The length of myString is:", + myString.length);


/*1.3The commas make that the sentence is quite hard to read.
 Find a way to remove the commas from the string and replace them with spaces.*/
//NOTE: We use "g" to make it global.In other word, if we don't use it, we will remove the first "," .
console.log(myString.replace(/,/g, ' '));


//1.4 Log myString to see if you succeeded.
console.log(myString);

console.log("====================================ARRAY===========================================");
//2. Arrays!


let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);


//2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

/*2.3 Now add Jim's favorite animal to the array, it's 'meerkat', 
but make sure it will be placed after 'blowfish' and before 'capricorn'. */
//NOTE:start at index 1, remove nothing, but add in 'meerkat'
favoriteAnimals.splice(1, 0, 'meerkat');


//2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log('I think the new value of the array will be "blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle');


//2.5 Log your new array! 
console.log(favoriteAnimals);


/*2.6 Log the length of the array, add a message: 'The array has a length of:
 ' (here you should show the length of the array). */
console.log("The length of the array is:" + "" + favoriteAnimals.length);


//2.7 Jason does not like 'giraffe', delete this animal from the array.
// The first argument is the starting index and the second item is the number of itmes to remove.
//https://ilikekillnerds.com/2016/05/removing-items-array-javascript-by-index/.
//array.splice(index,the no. of elements that i want to remove them from my array);
favoriteAnimals.splice(3, 1); //delete 1 element from index 3


//2.8 Again log your new array
console.log(favoriteAnimals);


/*2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, 
but you don't know the position or the index of the item in the array, how can you find it?*/
//https://ilikekillnerds.com/2016/05/removing-items-array-javascript-by-index/.
//we make 
let meerkat = favoriteAnimals.indexOf('meerkat');
if (meerkat != -1) {
    favoriteAnimals.splice(meerkat, 1);
    console.log("The item you are looking for is at index " + meerkat);
} else {
    console.log("I did not find meerkat");
}

//2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
console.log(favoriteAnimals);
//To show the index of an item, we use
console.log('The item you are looking for is at index:' + favoriteAnimals.indexOf('meerkat'))




console.log("======================More JavaScript=================================");

//We use function cuz we dont want to repeart the code and we need to structure the code.
//1.Create a function that takes 3 arguments and returns the sum of the these arguments.
let a, b, c;
function f(a, b, c) {
    return a + b + c;
}
console.log(f(2, 4, 8));


//2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {

    console.log("a" + " " + color + " car");
}


colorCar("red");


//3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
//The parameter of the function  cant be the name of the object,it should have a new name and then you will call your function with your object.
//we use for...in loop to print out all the contain of our array.
//when we call the function with the object we repalce the parameter with this object and everthing we did inside the function will go to the function.
let mycar = { brand: "Toyota", model: "Accord", year: 1988 };

function myFunc(car) {
    for (const key in mycar) {
        console.log(key + ":" + mycar[key]);
    }
} myFunc(mycar);


/*4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. 
And prints 'a blue motorbike' for example when called as vehicleType("blue", 2).*/
function vehicleType(color, code) {
    if (code = 1) {

        console.log("a", color, "car");
    } else if (code = 2) {

        console.log("a", color, "motorbike");
    }
}
vehicleType("blue", 1);


/*5.Can you write the following without the if statement, but with just as a single line with console.log(...);?
if (3 === 3) {
    console.log("yes")
} else {
    console.log("no")
}*/
(3 === 3) ? console.log("true") : console.log("false");



/*6.Create a function called vehicle, like before, but takes another parameter called age,
 so that vehicle("blue", 1, 5) prints 'a blue used car'*/
function vehicle(color, code, age) {
    let vehicleType;
    let vehicleAge;

    if (code === 1) {
        vehicleType = 'car';
    } else if (code === 2) {
        vehicleType = 'motorbike';
    }


    if (age === 0) {
        vehicleAge = 'new';
    } else {
        vehicleAge = 'used';
    }

    console.log("a " + color + " " + vehicleAge + " " + vehicleType);
}

console.log(vehicle("blue", 1, 5));


//7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
var vehicles = ["motorbike", "caravan", "bike", "car"];


//8.How do you get the third element from that list?
console.log('The third element from my array is:' + (vehicles[2]));


//9.Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
//In this case we have an array that have more than two elements,therefore, the easiest way to go through the element of the array is to use if statement.
var vehicles = ["motorbike", "caravan", "bike", "car"];
function vehicle2(color, i, age) {
    if (age > 1)
        console.log("a " + color + " " + "used" + " " + vehicles[i]);
    else
        console.log("a " + color + " " + "new" + " " + vehicles[i]);
}

vehicle2("green", 3, 1);
vehicle2("red", 1, 2);



/*10.Use the list of vehicles to write an advertisement. So that it prints something like:
 "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
Hint, the output should be correct English with all the punctuation in place (that's the challenge).
 So plurals for the vehicle types, commas followed by a single space, 
 the word and to replace the final comma and closed off by a period.*/


vehicleArray = ["motorbike", "caravan", "truck", "bike", "car"];
function advertisement(vehicleArray) {
    let message = "Amazing Joe's Garage, we service ";

    for (let i = 0, len = vehicleArray.length; i < len - 2; i++) {
        message += vehicleArray[i] + "s, ";
    }
    message += vehicleArray[vehicleArray.length - 2] + "s and " + vehicleArray[vehicleArray.length - 1] + "s.";

    console.log(message); //Amazing Joe's Garage, we service motorbikes, caravans, trucks, bikes, and 
}

advertisement(vehicleArray);

//11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
vehicleArray.push("scoter");
console.log(vehicleArray);
advertisement(vehicleArray);



//12.Create an empty object.
myObject = {};
console.log();

//13.Create an object that contains the teachers that you have had so far for the different modules.
techObject = ["Victor", "Tommy", "Shamrat", "Wojtek"];
console.log(techObject);


//14.Add a property to the object you just created that contains the languages that they have taught you.

techObject = {
    Victor: "HTML", Tommy: "github", Shamrat: "JavaScript", Wojtek: "homeWork"
};
console.log(techObject);



/*15.???Write some code to test two arrays for equality using == and ===. Test the following:
    let x = [1,2,3];
    let y = [1,2,3];
    let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!*/

var x, y, z
if (x == y) {                                             //same 
    console.log("same");
} else {
    console.log("not the same");
}

console.log(x === y ? "same" : "not the same");           //same    

console.log(z == y ? "same" : "not the same");            //same

console.log(z == x ? "same" : "not the same");           //same


/*16.Take a look at the following code:
     let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
Does the order that you assign (o3 = o2 or o2 = o3) matter?*/
console.log('What I think is: changing 02 will changes the value of 03 because 03=02, but changing the value of 01 will not effect the value of 03');
console.log('The order that we assign the variable is matter: when we say 03=02 this means that 03= {foo:"bar"}, however when we say 02=03 this means that 02 is equal to the value of 03');

o1 = { foo: 'dalia' };

console.log(o1);        //{foo: 'dalia'}

o2 = { foo: 'ahmed' };

console.log(o2);        //{foo: 'ahmed'}

o3 = o2;

console.log(o3);        //{foo: 'ahmed'}

console.log(o2 == o3);  //true
console.log(o3 == o2);  //true


/*17.What does the following code return? (And why?):
let bar = 42;
typeof typeof bar;*/
console.log('I think this code return "string", this is becuase: typeof bar = "number", therefore, typeof typeof bar = "string"');

let bar = 42;

typeof typeof bar



console.log(typeof typeof bar);     //string 

console.log(bar);                   // 42. 

console.log(typeof bar);


/*17.What does the following code return? (And why?):
let bar = 42;
typeof typeof bar;*/
console.log('I think this code return "string", this is becuase: typeof bar = "number", therefore, typeof typeof bar = "string"');

let bar = 42;

typeof typeof bar



console.log(typeof typeof bar);     //string 

console.log(bar);                   // 42. 

console.log(typeof bar); //number
