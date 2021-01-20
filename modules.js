module.exports = {
  getBinary: (str) => {
    // Reverse string if input has 4 char, else pad without reversing
    if (str.length === 4) {
      str = str.split('').reverse().join('');
    }
    console.log(str);
    // Get charCodes and binary values
    let binaries = [];
    for (let i in str) {
      let binary = str[i].charCodeAt().toString(2);
      // console.log(binary);
      // Zero pad binary
      if (binary.length < 8) {
        let n = binary.length;
        while (n < 8) {
          binary = '0' + binary;
          n++;
        }
      }
      binaries.push(binary);
    }
    console.log(binaries);
    if (binaries.length < 4) {
      let n = binaries.length;
      while (n < 4) {
        binaries.unshift('00000000');
        n++;
      }
      // console.log(binaries);
      return binaries;
    }
    return binaries;
  },

  formatInput: (arr) => {
    // Separate elements
    const output = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('');
      output.push(arr[i]);
    }
    // console.log(output);
    return output;
  },
  encode: (arr) => {
    // remix elements to obtain new (encoded) binaries
    const row1 = [],
      row2 = [],
      row3 = [],
      row4 = [],
      row5 = [],
      row6 = [],
      row7 = [],
      row8 = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (j === 0) {
          row1.push(arr[i][j]);
        }
        if (j === 1) {
          row2.push(arr[i][j]);
        }
        if (j === 2) {
          row3.push(arr[i][j]);
        }
        if (j === 3) {
          row4.push(arr[i][j]);
        }
        if (j === 4) {
          row5.push(arr[i][j]);
        }
        if (j === 5) {
          row6.push(arr[i][j]);
        }
        if (j === 6) {
          row7.push(arr[i][j]);
        }
        if (j === 7) {
          row8.push(arr[i][j]);
        }
      }
    }
    const output = [
      [row1 + ',' + row2],
      [row3 + ',' + row4],
      [row5 + ',' + row6],
      [row7 + ',' + row8],
    ];
    // console.log('encoded output', output);
    return output;
  },
  formatOutput: (arr) => {
    // console.log(arr);
    let container = [];
    for (let i = 0; i < arr.length; i++) {
      //Get rid of commas
      arr[i] = arr[i].toString().replace(/,/g, '');
      // console.log('no commas', arr[i]);
      // Get html value
      arr[i] = parseInt(arr[i], 2);
      // console.log('html', arr[i]);
      // Get hexadecimal values
      arr[i] = arr[i].toString(16);
      // console.log('toString', arr[i]);
      // Zero padding
      if (arr[i].length < 2) {
        arr[i] = '0' + arr[i];
      }
      // console.log('zero pad', arr[i]);
      container.push(arr[i]);
    }
    return parseInt(arr.join(''), 16);
  },
};
