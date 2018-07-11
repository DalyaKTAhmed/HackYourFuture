/*4.Now change the function you used to display the book ID's in a list to take the actual 
information about the book from the object and display that.
 Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.*/

/*5.Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. 
Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.*/

//6.Beautify your html page with css, add sources and alts to each of the images.

/*7.Download book covers for each book, construct a new Object which has as keys the bookId's again,and as value the path to the image source(e.g. { "harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}).
Now loop over these entries(hint: Object.keys(objectName) gives you an array containing the keys).Then write a function which places an image at the corresponding li element.Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. 
(Hint: you could give each li item an id tag by modifying the function you made before).*/



const bookObjects = {

    weetzie_bat:

        {
            title: "Weetzie Bat",
            language: "English",
            author: "Sandra",
            img: "./jsimages/1.jpg"

        },

    tales_the_city:

        {

            title: "Tales of the City",
            language: "Swedish",
            author: "Ahmed",
            img: "./jsimages/2.jpg"

        },

    the_serial:

        {
            title: "The Serial",
            language: "Arabic",
            author: "Paul",
            img: "./jsimages/3.jpg"

        },

    east_eden: {

        title: "East of Eden",
        language: "English",
        author: "Kamal",
        img: "./jsimages/4.jpg"

    },

    island_blue_dolphins: {

        title: "Island of the blue Dolphins",
        language: "Arabic",
        author: "Unknown",
        img: "./jsimages/5.jpg"

    },

    of_mice_men: {

        title: "Of Mice and Men",
        language: "English",
        author: "Noor",
        img: "./jsimages/6.jpg"

    },

    the_onion_field: {

        title: "The Onion Field",
        language: "Swedish",
        author: "Wafaa",
        img: "./jsimages/7.jpg"
    },

    the_grapes_wrath: {

        title: "The Grapes of Wrath",
        language: "English",
        author: "Saloa",
        img: "./jsimages/8.jpg"

    },

    less_than_zero: {

        title: "Less Than Zero",
        language: "English",
        author: "Udy",
        img: "./jsimages/9.jpg"

    },

    rain_of_glad: {

        title: "Rain of Gold",
        language: "English",
        author: "Linn",
        img: "./jsimages/10.jpg"
    }
};


function bookInfo(object) {

    var ul = document.createElement("ul");
    document.body.appendChild(ul);

    var array = Object.keys(bookObjects);

    for (var i = 0; i < array.length; i++) {

        var li = document.createElement("li");

        htmlElements(i, li);


        ul.appendChild(li); //add the list il to ul.


    }

    function htmlElements(i, li) {

        li.innerHTML = `<li>
                                <h2>${object[array[i]].title}</h2>

                                <p>
                                    <span>Writen by:</span>
                                    <span>${object[array[i]].author}</span>
                                    </p>

                                <p>
                                    <span>Language:</span>
                                    <span>${object[array[i]].language}</span>
                                    </p>

                                <img src= ${object[array[i]].img}>

                            </li>`;

    }

}

bookInfo(bookObjects);