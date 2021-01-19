module.exports = {
  getBinary: (str) => {
    // Reverse string
    str = str.split('').reverse().join('');
    // Get charCodes and binary values
    let binaries = [];
    for (let i in str) {
      let binary = str[i].charCodeAt().toString(2);
      console.log(binary);
      binaries.push(binary.length < 8 ? '0' + binary : binary);
    }
    console.log('original binaries', binaries);
    return binaries;
  },
  formatInput: (arr) => {
    // Separate elements
    const output = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('');
      output.push(arr[i]);
    }
    // console.log('formatInput', output);
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
    return [
      [row1 + ',' + row2],
      [row3 + ',' + row4],
      [row5 + ',' + row6],
      [row7 + ',' + row8],
    ];
  },
  formatOutput: (arr) => {
    let container = [];
    for (let i = 0; i < arr.length; i++) {
      //Get rid of commas
      arr[i] = arr[i].toString().replace(/,/g, '');
      // Get html value
      arr[i] = parseInt(arr[i], 2);
      // Get hexadecimal values
      arr[i] = arr[i].toString(16);
      // Zero padding
      if (arr[i].length < 2) {
        arr[i] = '0' + arr[i];
      }
      container.push(arr[i]);
    }
    return parseInt(arr.join(''), 16);
  },
};
