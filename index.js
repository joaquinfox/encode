const { getBinary, formatInput, encode, formatOutput } = require('./modules');
let testInput = 'abcde';

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
    // console.log(arr);
    // for (let i = 0; i < arr.length; i++) {
    //   encoder(arr[i]);
    // }
  }
  // HANDLE STRINGS DIVISIBLE BY 4
  else {
    arr = str.match(/..../gi);
    // console.log(arr);
    // for (let i = 0; i < arr.length; i++) {
    //   encoder(arr[i]);
    // }
  }
  for (let i = 0; i < arr.length; i++) {
    encoder(arr[i]);
  }
}

function encoder(str) {
  console.log('from encoder', str);
  // const binaries = getBinary(str);
  // const formattedInput = formatInput(binaries);
  // const arr = encode(formattedInput);
  // return formatOutput(arr);
  // formatOutput();
}
// console.log(encoder(testInput));
