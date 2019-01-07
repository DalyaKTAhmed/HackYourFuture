

console.log('======Custom DOM manipulation challenge=====');

/*1.Declare an array that contains 10 strings.
These strings should be of book titles and be lowercase without
spaces or special characters so that you can use these later as Id's.
    (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).*/

var myBooks = [

    'weetzie_bat',

    'tales_the_city',

    'the_serial',

    'east_eden',

    'island_blue_dolphins',

    'of_mice_men',

    'the_onion_field',

    'the_grapes_wrath',

    'less_than_zero',

    'rain_of_glad'];



/*2.Create a basic html file called index.html and use it to load the js file, confirm the console.log show the array. 
(This is for debugging and making sure everything is in order. Delete it later when you're done :))*/



let x;

for (let book in myBooks) {

    x += myBooks[book] + "<br>";

}

//console.log('my array is:' + myBooks);


//3.Make a functionthat generate a ul with li elements for each book ID in the array using a for loop.

var ul = document.createElement('ul');
document.body.appendChild(ul)

myBooks.forEach(function (book) {
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = + book;
}
)


/*4.Now change the function you used to display the book ID's in a list to take the actual 
information about the book from the object and display that.
 Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.*/

 const bookObjects = {

    weetzie_bat:
    {
        title: "Weetzie Bat",
        language: "English",
        author: "Sandra"
    },

    tales_the_city:
    {
        title: "Tales of the City",
        language: "Swedish",
        author: "Ahmed"
    },

    the_serial:

    {
        title: "The Serial",
        language: "Arabic",
        author: "Paul"
    },

    east_eden:
    {
        title: "East of Eden",
        language: "English",
        author: "Kamal"
    },

    island_blue_dolphins:
    {
        title: "Island of the blue Dolphins",
        language: "Arabic",
        author: "Unknown"
    },

    of_mice_men: 
    {
        title: "Of Mice and Men",
        language: "English",
        author: "Noor"
    },

    the_onion_field: 
    {
        title: "The Onion Field",
        language: "Swedish",
        author: "Wafaa"
    },

    the_grapes_wrath: 
    {
        title: "The Grapes of Wrath",
        language: "English",
        author: "Saloa"
    },

    less_than_zero: 
    {
        title: "Less Than Zero",
        language: "English",
        author: "Udy"
    },

    rain_of_glad:
     {
        title: "Rain of Gold",
        language: "English",
        author: "Linn"
    }
};

// //5.Now change the function you used to display the book ID's in a list to 

// //take the actual information about the book from the object and display that. 

// //Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

 function bookInfo(object) {

     var ul = document.createElement("ul");

     document.body.appendChild(ul);

     var array = Object.keys(bookObjects);

     for (var i = 0; i < array.length; i++) {

         var li = document.createElement("li");

         htmlElements(i, li);


         ul.appendChild(li); //add the list il to ul.

         ul.style.listStyleType = 'none';           //removes the "bullet"

         ul.style.maxWidth = '50%';

     }   function htmlElements(i, li) {

    li.innerHTML = `<li style="border: 1px solid gray; background: mintcream; padding: 1em;text-align:center;">
    <h2>${object[array[i]].title}</h2>
   <p>
          <span style="margin-right: 0.5em; font-weight: bold;">Writen by:</span>
          <span>${object[array[i]].author}</span></p>
     <p>
        <span style="padding-right: 0.5em; font-weight: bold;">Language</span>
          <span>${object[array[i]].language}</span>
          </p>
 </li>`;
}

}

bookInfo(bookObjects);
//6.Beautify your html page with css, add sources and alts to each of the images.



//7.Download book covers for each book, construct a new Object which has as keys the bookId's again,

//and as value the path to the image source(e.g. { "harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}).

//Now loop over these entries(hint: Object.keys(objectName) gives you an array containing the keys).Then write a function which places an image at the corresponding li element.Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. 

//(Hint: you could give each li item an id tag by modifying the function you made before).

// var booksCover = {

//     haweetzie_bat: {

//         coverlink: "./jsimages/1.jpg"
//     },

//     tales_the_city: {

//         coverlink: "./jsimages/2.jpg"

//     },

//     tthe_serial: {

//         coverlink: "./jsimages/3.jpg"

//     },

//     east_eden: {

//         coverlink: "./jsimages/4.jpg"

//     },


//     island_blue_dolphins: {

//         coverlink: "./jsimages/5.jpg"

//     },

//     design_patof_mice_men: {

//         coverlink: "./jsimages/6.jpg"

//     },

//     the_onion_field: {

//         coverlink: "./jsimages/7.jpg"

//     },


//     sthe_grapes_wrath: {

//         coverlink: "./jsimages/8.jpg"

//     },

//     less_than_zero: {

//         coverlink: "./jsimages/9.jpg"

//     },

//     rain_of_glad: {

//         coverlink: "./jsimages/10.jpg"

//     }

// };

// function showBooksCover(cover) {

//     var coverList = document.createElement("ul");
//     document.body.appendChild(coverList);

//     var arrayOfKeys = Object.keys(cover);

//     for (var i = 0; i < arrayOfKeys.length; i++) {

//         let key = arrayOfKeys[i];

//         var itemscover = document.createElement('li');

//         itemscover.setAttribute('id', key);

//         coverList.appendChild(itemscover);

//         coverList.style.listStyleType = 'none';

//         var image = document.createElement("img");

//         image.setAttribute("src", booksCover[key].coverlink);

//         image.setAttribute("width", "150");

//         image.setAttribute("height", "150");

//         image.setAttribute("alt", key);

//         itemscover.appendChild(image);
//     }
// } showBooksCover(booksCover);



