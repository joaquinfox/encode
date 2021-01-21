const { getBinary, formatInput, encode, formatOutput } = require('./modules');
const testInput = 'tacoy';

function encoder(str) {
  if (str.length > 4) {
    if (str.length % 4) {
      let n = str.length;
      while (n % 4) {
        str = str += '&';
        n++;
      }
      // Bunle into 4 packs
      const arr = str.match(/..../gi);
      // Trim off padding
      arr[arr.length - 1] = arr[arr.length - 1].replace(/&/g, '');
      console.log(arr);
    } else {
      return (arr = str.match(/..../gi));
    }
    // for (let i = 0; i < arr.length; i++) {
    //   console.log(arr, arr[i]);
    //   encoder(arr[i]);
    // }
  } else {
    const binaries = getBinary(str);
    const formattedInput = formatInput(binaries);
    const arr = encode(formattedInput);
    return formatOutput(arr);
  }
}
console.log(encoder(testInput));
