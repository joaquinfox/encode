const {
  getBinary,
  formatInput,
  encode,
  formatOutput,
  handleLongString,
} = require('./modules');
const testInput = 'tacocat';

function encoder(str) {
  if (str.length > 4) {
    return handleLongString(str);
  } else {
    const binaries = getBinary(str);
    const formattedInput = formatInput(binaries);
    const arr = encode(formattedInput);
    return formatOutput(arr);
  }
}
console.log(encoder(testInput));
