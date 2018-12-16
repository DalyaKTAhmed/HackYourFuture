//1

console.log("Hello World!");//english

console.log("Hola Mundo!");//Spanish

console.log("Hej Världen!");//Swedish



//2

var x

console.log("the value of my variable x will be UNDIFINED");

console.log(x="hello dalia");



//3

var x="3";

console.log("The value of x will be:3");



//4

var y="Hello";

console.log("the value of my string will be:Hello");

var y="JavaScript"

console.log("the value of my string will be:JavaScript");

console.log(y);



//5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?

var z="7.25";

console.log(z);

var a = Math.round(7.25);

console.log(a);

var n

if (a > z) {

n = a;

}else{

    n = z;

}



//6.Arrays!

var plurality =[];

console.log("it is an empty array");

console.log(plurality);

var favoriteAnimals =["dog","cat", "dolphin", "panda"]

console.log(favoriteAnimals); 

favoriteAnimals.push("baby pig");

console.log(favoriteAnimals); 



//7. More strings

let  myScrings= "this is a test";

console.log(myScrings);

myScrings.length;

console.log(myScrings.length);



//8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

var x=5;                      

let r= false;               

var z= 7;               

var m=['1', '2', '3'];          



console.log(x);

console.log(r);

console.log(z);

console.log(m);



console.log('The value of my 1st variable will be:5');

console.log('The value of my 2nd variable will be:Hi');

console.log('The value of my 3rd variable will be:12300000');

console.log('The value of my 4th variable will be:34.00');



console.log(typeof x);

console.log(typeof r);

console.log(typeof z);

console.log(typeof m);



//For Loop

let myArray = [x,r,z,m];

for(var i=0; i<myArray.length; i++){

    



   for(var j=i+1; j<myArray.length; j++ ){



       if (typeof myArray [i] == typeof myArray [j]){

       

console.log('When:i=',i,'j=',j );

console.log("comparing " + myArray[i] + " with " + myArray[j]);

console.log('Same type');

}

 

console.log('When:i=',i,'j=',j );

console.log("comparing " + myArray[i] + " with " + myArray[j]);

console.log('Different type');

}



}



//While Loop

let p = 0;       // i will start from index[0]

let k = p + 1;   // j will start from index[1]





while (p < myArray.length){

   

    console.log("comparing " + myArray[p] + " with " + myArray[k]);

    console.log('When:p=',p,'k=',k );

    if (typeof myArray[p]===myArray[k]){



        console.log('Same type');

    } 

    console.log('Different type');

     p++;

}



//For...of Loop

for (const item of myArray){

    console.log(item);

}



//9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?



//9.1 Add at least 3 console.log statements in which you show that you understand what % does.

x = 7;

x = 7 % 3;

x = 1;

console.log("%The modular operator returns the division remainder.");

console.log("x %= y This statement same as x = x % y");

console.log("ex; 9 %= 2 is 1");



//10. Write a program to answer the following questions:



//10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.

var person = {firstName:"Dalya", lastName:"Ahmed", age:30};



//10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?

isFinite(6/0) === isFinite(10/0);



//10.3 Add console.log statements to the above program's in which you show that you understand the concepts (just like you've done in the above assignments).

console.log(isFinite(6/0) === isFinite(10/0));

