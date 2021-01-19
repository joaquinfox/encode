const testInput = [
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'],
  ['q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
  ['y', 'z', '1', '2', '3', '4', '5', '6'],
];
const desiredOutput = [
  ['a', 'i', 'q', 'y', 'b', 'j', 'r', 'z'],
  ['c', 'k', 's', '1', 'd', 'l', 't', '2'],
  ['e', 'm', 'u', '3', 'f', 'n', 'v', '4'],
  ['g', 'o', 'w', '5', 'h', 'p', 'x', '6'],
];

function encode(arr) {
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
}
// console.log(encode(testInput));

const testInput2 = [
  ['0,0,0,0,1,1,1,1'],
  ['1,1,1,1,0,0,0,0'],
  ['0,0,1,0,0,0,0,0'],
  ['1,1,0,1,0,0,1,1'],
];

const getBinary = (str) => {
  // Reverse string
  str = str.split('').reverse().join('');
  // Get charCodes and binary values
  let binaries = [];
  for (let i in str) {
    let binary = str[i].charCodeAt().toString(2);
    binaries.push(binary.length < 8 ? '0' + binary : binary);
  }
  //   return binaries;
  return binaries;
};

let binaries = getBinary('FRED');

const testInput3 = [
  ['0,0,0,0,1,1,1,1'],
  ['0,0,0,0,0,0,1,0'],
  ['0,0,0,0,1,1,0,1'],
  ['0,0,1,1,0,1,0,0'],
];
const formatOutput = (arr) => {
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
};
// console.log(formatOutput(testInput3));

const zeroPad = (str) => {
  if (str.length < 8) {
    let n = str.length;
    while (n < 8) {
      str = str += '0';
      n++;
    }
    return str;
  }

  return str;
};

console.log(zeroPad('c'));
/*
x = output array      y = input array   z = input array element

x y z
=====
0 0 0 
0 1 0
0 2 0
0 3 0
0 0 1
0 1 1
0 2 1
0 3 1
1 0 2
1 1 2
1 2 2
1 3 2
1 0 3 
1 1 3
1 2 3
1 3 3
2 0 4 
2 1 4
2 2 4
2 3 4
2 0 5
2 1 5
2 2 5 
2 3 5
3 0 6
3 1 6
3 2 6
3 3 6
3 0 7
3 1 7
3 2 7
3 3 7

*/
