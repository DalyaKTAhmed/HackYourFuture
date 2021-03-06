'use strict';

//1.write a program that doubles the odd numbers in an array and throws away the even number.
/*const numbers = [1, 2, 3, 4];
const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log('The doubled numbers are', newNumbers); // ==> [2, 6]*/
//Rewrite the above program using map and filter don't forget to use =>.
//map works on array
function doubleOdd_numbers() {
    let numbers = [1, 2, 3, 4];
    let newNumber = [];

    let newNumbers = numbers.filter((number) => number % 2 !== 0)
        .map(number => { return (number * 2) });

    console.log("The doubled numbers are", newNumbers);
}
doubleOdd_numbers();


/*2.

Write a program that computes how much Maartje has earned by completing these tasks, using map and filter.
For the 'summing part' you can try your luck with reduce; alternatively, you may use forEach or a for loop.

Follow these steps.Each step should build on the result of the previous step.

1.Map the tasks to durations in hours.
Filter out everything that took less than two hours(i.e., remove from the collection)
Multiply the each duration by a per - hour rate for billing(you can decide yourself what Maartje should earn per hour)
 and sum it all up.
Output a formatted Euro amount, rounded to Euro cents, e.g: € 12.34.
Choose variable and parameters names that most accurately describe their contents or purpose.When naming an array, use a plural form, e.g.durations.For a single item, use a singular form, e.g.duration.For details, see Naming Conventions.
    Don't forget to use =>.*/
//Note: the durations are specified in minutes.

const monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

const tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

const tasks = monday.concat(tuesday)
    .map((task) => task.duration / 60)
    .filter((duration) => duration >= 2)
    .map((duration) => duration * 400)
    .reduce((total, currentValue) =>
        [(total = + currentValue)]
            .map((euro_amount) => '€' + euro_amount.toFixed(2)));
console.log(tasks);