const { getBinary, formatInput, encode, formatOutput } = require('./modules');
const testInput = 'tacocat';

function encoder(str) {
  if (str.length > 4) {
    if (str.length % 4) {
      let n = str.length;
      while (n % 4) {
        str = str += '&';
        n++;
      }
      return (arr = str.match(/..../gi));
      // Remove last char
      arr[arr.length - 1] = arr[arr.length - 1].replace(/.$/, '');
    } else {
      return (arr = str.match(/..../gi));
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
