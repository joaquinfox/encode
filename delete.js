const decodeTestInput = [267487694, 999999999];

function decoder(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    // Make hexadecimal
    let hex = inputArr[i].toString(16);
    hex = (hex.length < 8 ? '0' + hex : hex).match(/../g);
    // console.log(hex);

    // Get charCodes
    let charCodes = [];
    hex.forEach((i) => {
      return charCodes.push(parseInt(i, 16));
    });
    // console.log(charCodes);
    // Make binary numbers
    let binaries = [];
    charCodes.forEach((i) => {
      return binaries.push(i.toString(2));
    });
    // console.log('binaries', binaries);

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
        console.log(i);
      }
      // console.log(zeroPadded);
      // return zeroPadded;
    });
    console.log(zeroPadded);

    // Split each binary into arrays of 8 digits
    let sectionedBinaries = [];
    for (let i = 0; i < zeroPadded.length; i++) {
      zeroPadded[i] = zeroPadded[i].split('');
      sectionedBinaries.push(zeroPadded[i]);
    }
    // console.log('flag1', sectionedBinaries);
    // Unscramble
    let output = [[], [], [], []];
    // let arr = sectionedBinaries;
    // output[0][0] = arr[0][0];
    // output[1][0] = arr[0][1];
    // output[2][0] = arr[0][2];
    // output[3][0] = arr[0][3];
    // output[0][1] = arr[0][4];
    // output[1][1] = arr[0][5];
    // output[2][1] = arr[0][6];
    // output[3][1] = arr[0][7];

    // output[0][2] = arr[1][0];
    // output[1][2] = arr[1][1];
    // output[2][2] = arr[1][2];
    // output[3][2] = arr[1][3];
    // output[0][3] = arr[1][4];
    // output[1][3] = arr[1][5];
    // output[2][3] = arr[1][6];
    // output[3][3] = arr[1][7];

    // output[0][4] = arr[2][0];
    // output[1][4] = arr[2][1];
    // output[2][4] = arr[2][2];
    // output[3][4] = arr[2][3];
    // output[0][5] = arr[2][4];
    // output[1][5] = arr[2][5];
    // output[2][5] = arr[2][6];
    // output[3][5] = arr[2][7];

    // output[0][6] = arr[3][0];
    // output[1][6] = arr[3][1];
    // output[2][6] = arr[3][2];
    // output[3][6] = arr[3][3];
    // output[0][7] = arr[3][4];
    // output[1][7] = arr[3][5];
    // output[2][7] = arr[3][6];
    // output[3][7] = arr[3][7];
    // console.log('output', output);
  }
}
console.log(decoder(decodeTestInput));
