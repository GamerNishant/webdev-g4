// objects : Is a collection of key value pairs

let obj = {
    key : "Value1",
    key2 : 'value2'
};
console.log(obj);
console.log(typeof obj);


let arrB = [true, false, true];
let arrS = ['a', 'Bstring', "cd"];

console.log(typeof arrI);
console.log(typeof arrB);
console.log(typeof arrS);

/////////////////////////
let details = {
    'firstName' : "Nishant",
    secondName : "Singh"
}

// Accessing values using dot notation
console.log(details.firstName + ' ' 
    + details.secondName);

// updating values using dot notation

details.firstName = "Random"
details.secondName = "Stranger"
console.log(details.firstName + ' ' 
    + details.secondName);

// deletion using dot notation
delete details.firstName;
console.log(details.firstName + ' ' 
    + details.secondName);

// inserting using dot notation
details.address = "earth";
console.log(details.firstName + ' ' 
    + details.secondName + ' lives in ' + 
    details.address);


    // adding another obj

details.anotherobj = {
    key1 : 10, 
    key2 : 20
}

console.log(details);


let obj1 = {
    '' : 10,
    " " : 20
}

console.log(obj1['']);

var arrI = [1, 2, 3];
// for (let key in arrI) {
//     console.log('index: '+ key);
//     console.log(arrI[key]);
// }

// let strA = "Hello";
// for(let key in strA)
// {
//     console.log(strA[key]);
// }

for(let key in details)
{
    console.log(details.key);
    console.log(details[key]);
}

let arr = [true, 10, {keys : "value"}];
console.log(arr);