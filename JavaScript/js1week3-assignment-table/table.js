const students = [
    {
        name: "Piter",
        education: "IT",
        city: "Lund",
        picture: "./studentimages/dave.jpg"
    },
    {
        name: "Dalya",
        education: "Engineering",
        city: "Malmö",
        picture: "https://drive.google.com/uc?id=1lqK0MS4X8pOgrVRhGwBJcMi3n7xiBl4j"
    },
    {
        name: "Sarah",
        education: "Teacher",
        city: "Gutenberg",
        picture: "./studentimages/asia.jpg"
    }
];

function createStudents(arr) {
    var table = document.createElement('table');
    var header = document.createElement('tr')
    //write the header row
    for (var key in arr[0]) {
        console.log(key)
        header.innerHTML += `<th>${key}</th>`;
    }
    table.appendChild(header);
    for (let i = 0; i < arr.length; i++) {
        var row = document.createElement('tr');
        row.innerHTML = `
                     <td>${arr[i].name}</td>
                     <td>${arr[i].education}</td>
                     <td>${arr[i].city}</td>
                     <td><img src=${arr[i].picture}></td>`;
        table.appendChild(row);
    }
    document.body.appendChild(table)
}
