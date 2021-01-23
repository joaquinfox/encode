const { getBinary, formatInput, encode, formatOutput } = require('./modules');

const testInput = 'egad, a base tone denotes a bad age';
const decodeTestInput = 251792692;

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

function decoder(n) {
  // Make hexadecimal
  let hex = n.toString(16);
  hex = (hex.length < 8 ? '0' + hex : hex).match(/../g);
  // console.log(hex);

  // Get charCodes
  let charCodes = [];
  hex.forEach((i) => {
    return charCodes.push(parseInt(i, 16));
  });
  // console.log(binary);

  // Make binary numbers
  let binaries = [];
  charCodes.forEach((i) => {
    return binaries.push(i.toString(2));
  });
  // console.log(binaries);

  // Zero pad binary numbers
  let zeroPadded = [];
  binaries.forEach((i) => {
    if (i.length < 8) {
      let n = i.length;
      while (n < 8) {
        i = '0' + i;
        n++;
      }
      zeroPadded.push(i);
      // console.log(i);
    }
    return zeroPadded;
  });
  // console.log(zeroPadded);

  // Split each binary into arrays of 8 digits
  let sectionedBinaries = [];
  for (let i = 0; i < zeroPadded.length; i++) {
    zeroPadded[i] = zeroPadded[i].split('');
    sectionedBinaries.push(zeroPadded[i]);
  }

  // Unscramble
  let output = [[], [], [], []];
  let arr = sectionedBinaries;
  output[0][0] = arr[0][0];
  output[1][0] = arr[0][1];
  output[2][0] = arr[0][2];
  output[3][0] = arr[0][3];
  output[0][1] = arr[0][4];
  output[1][1] = arr[0][5];
  output[2][1] = arr[0][6];
  output[3][1] = arr[0][7];

  output[0][2] = arr[1][0];
  output[1][2] = arr[1][1];
  output[2][2] = arr[1][2];
  output[3][2] = arr[1][3];
  output[0][3] = arr[1][4];
  output[1][3] = arr[1][5];
  output[2][3] = arr[1][6];
  output[3][3] = arr[1][7];

  output[0][4] = arr[2][0];
  output[1][4] = arr[2][1];
  output[2][4] = arr[2][2];
  output[3][4] = arr[2][3];
  output[0][5] = arr[2][4];
  output[1][5] = arr[2][5];
  output[2][5] = arr[2][6];
  output[3][5] = arr[2][7];

  output[0][6] = arr[3][0];
  output[1][6] = arr[3][1];
  output[2][6] = arr[3][2];
  output[3][6] = arr[3][3];
  output[0][7] = arr[3][4];
  output[1][7] = arr[3][5];
  output[2][7] = arr[3][6];
  output[3][7] = arr[3][7];
  console.log('output', output);
}
console.log(decoder(decodeTestInput));
// console.log(encoder(testInput));
