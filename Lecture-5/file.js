let str = "Let's learn Javascript";
// length attribute

console.log(str.length);

// replace
console.log(str);
console.log(str.replace('learn', 'learning'));
console.log(str);

// indexOf
console.log(str.indexOf('Javascript'));

// lastIndexOf
console.log(str.lastIndexOf(' '));

// uppercase
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// includes
console.log(str);
console.log(str.includes('Javascript'));
console.log(str.includes('Random Text'));

// concat
console.log(str.concat('abc', 'lmn'));

// charAt
console.log(str.charAt(12));


//////////// HOTS ///////////////
let a = 10 + '1';
console.log(a);

let b = 10 + '1' - 1;
console.log(b);

let c = 10 + 'A' - 1;
console.log(c);
console.log(typeof c);

let d = Infinity;
console.log(typeof d);

let e = 3/0;
console.log(typeof e);

console.log(Infinity + (-Infinity));