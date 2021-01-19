module.exports = {
  getBinary: (str) => {
    // Reverse string
    str = str.split('').reverse().join('');
    // Get charCodes and binary values
    let binaries = [];
    for (let i in str) {
      let binary = str[i].charCodeAt().toString(2);
      binaries.push(binary.length < 8 ? '0' + binary : binary);
    }
    return binaries;
  },
  formatInput: (arr) => {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('');
      output.push(arr[i]);
    }
    return output;
  },
  encode: (arr) => {
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
};
