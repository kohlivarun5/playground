var assert = require("assert");


process.argv.forEach(function (val, index, array) {
  // console.log(index + ': ' + val);
});

let roman = process.argv[2].split("");
// console.log(roman);

// Iterate over the elements.
//
//

const values = {
  "I" : 1,
  "V" : 5,
  "X" : 10,
  "L" : 50,
  "C" : 100,
  "D" : 500,
  "M" : 1000
};

let decimal=0;
roman.map(function (val,i) {
  let value = values[val];
  assert(value,"Invalid roman numeral ["+val+"] @ "+i);

  decimal += value;
  
  if (i === 0) { 
    // No checks required for first 
    return; 
  }

  let prev_char = roman[i-1];
  // console.log(prev_char);
  let prev_val = values[prev_char];
  // console.log(prev_val);

  if (prev_val < value) {
    // Substract what we added and this
    decimal = decimal - (prev_val * 2); 
  }

});
console.log(decimal);

decimal = 0;
roman.reduce(function (prev_val, current, currentIndex) {

  let value = values[current];
  assert(value,"Invalid roman numeral ["+current+"] @ "+currentIndex);

  decimal += value;

  if (prev_val && (prev_val < value)) {
    decimal = decimal - (prev_val * 2);
  }

  return value;

},null);
console.log(decimal);
