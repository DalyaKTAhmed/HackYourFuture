
//3.1 write a function that takes another function as an argument and runs it.

function foo(func) {
    return func();
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);

