const { getBinary, formatInput, encode, formatOutput } = require('./modules');
const testInput = 'Woot';

function encoder(str) {
  const binaries = getBinary(str);
  const formattedInput = formatInput(binaries);
  const arr = encode(formattedInput);
  return formatOutput(arr);
}
console.log(encoder(testInput));
