const { getBinary, formatInput, encode, formatOutput } = require('./modules');

let testInput = 'egad, a base tone denotes a bad age';

if (testInput.length > 4) {
  handleLongString(testInput);
} else {
  console.log(encoder(testInput));
}

function handleLongString(str) {
  let arr = str.split('');
  // HANDLE STRINGS NOT DIVISIBLE BY 4
  if (arr.length % 4) {
    let n = arr.length;
    while (n % 4) {
      arr.push('&');
      n++;
    }
    // Bundle into 4 packs
    arr = arr.join('').match(/..../gi);
    arr[arr.length - 1] = arr[arr.length - 1].replace(/&/g, '');
  }
  // HANDLE STRINGS DIVISIBLE BY 4
  else {
    arr = str.match(/..../gi);
  }
  // Pass individual strings to encoder
  for (let i = 0; i < arr.length; i++) {
    console.log(encoder(arr[i]));
  }
}

function encoder(str) {
  const binaries = getBinary(str);
  const formattedInput = formatInput(binaries);
  const arr = encode(formattedInput);
  return formatOutput(arr);
}
// console.log(encoder(testInput));
