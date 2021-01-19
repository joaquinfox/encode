const { getBinary, formatInput, encode } = require('./modules');
const testInput = 'FRED';

function encoder(str) {
  const binaries = getBinary(str);
  const formattedInput = formatInput(binaries);
  return encode(formattedInput);
}
console.log(encoder(testInput));
