const students = [

    {
        ID: "196780",
        name: "Adam",
        eduction: "IT",
        city: "Kalmar",
        picture: "adam.jpg"
    },
    {
        ID: "1so334",
        name: "Asia",
        eduction: "teacher",
        city: "Malmö",
        picture: "asia.jpg"
    },
    {
        ID: "13t867",
        name: "Dave",
        eduction: "Engineering",
        city: "Lund",
        picture: "dave.jpg"
    }

];


function createStudents(studArray) {
    //create table
    var table = document.createElement('table');
    table.border = '1';
    document.body.appendChild(table);

    //create header
    var header = document.createElement('tr');
    for (var key in studArray[0]) {

        header.innerHTML += `<th>${key}</th>`;

    }
    table.appendChild(header);


    for (let i = 0; i < studArray.length; i++) {

        var row = document.createElement('tr');

        row.innerHTML = `<td>${studArray[i].id}</td>
                     <td>${studArray[i].name}</td>
                     <td>${studArray[i].education}</td>
                     <td>${studArray[i].city}</td>
                     <td><img src=${studArray[i].pic}></td>`;

        table.appendChild(row);

    }
}