// string
var str = ''
var str1 = 'H'
var str2 = 'Hello'
var str3 = "Hello"

console.log(typeof str)
console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)

// Number
let n1 = 100
console.log(typeof n1);
let n2 = 10.11
console.log(typeof n2);

// boolean
let b1 = true;
let b2 = false;

console.log(typeof b1);
console.log(typeof b2);

// Undefined
let d1;
console.log(d1);

// functions
function funName(){
    console.log("hello");
}
funName();
console.log(typeof funName);

// Object
let arr = [1, 2, 3];
console.log(arr);
console.log(typeof arr);
console.log(arr[1]);

let map = {
    name : "Hello"
}

console.log(map);
console.log(typeof map);

let f = null;
console.log(typeof f);

for (let i = 0; i < arr.length; i++) {
    str += arr[i] + ' ';
}

console.log(str);
console.log(typeof str);

while(condn)
{
    logic
}

do{
    logic
}while(condn)