const { getBinary, formatInput, encode, formatOutput } = require('./modules');
const testInput = 'tacocat';

function encoder(str) {
  if (str.length > 4) {
    if (str.length % 4) {
      // Bundle array into 4 character groups
      arr = str + '&';
      arr = arr.match(/..../gi);
      // Remove last char
      arr[arr.length - 1] = arr[arr.length - 1].replace(/.$/, '');
    } else {
      arr = arr.match(/..../gi);
    }
    for (let i = 0; i < arr.length; i++) {
      encoder(arr[i]);
    }
  } else {
    const binaries = getBinary(str);
    const formattedInput = formatInput(binaries);
    const arr = encode(formattedInput);
    return formatOutput(arr);
  }
}
console.log(encoder(testInput));
