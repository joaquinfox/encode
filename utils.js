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

// console.log(zeroPad('c'));

const input = 'tacocat';
/*
I want to take a long string and bundle it into groups of 4 characters, including whitespace.
'i like whiskey' =>[[i li],[ke w],[hisk],[ey]]

*/
const getCharCodes = (str) => {
  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt();
    console.log(
      str[i],
      'charCode: ' + charCode,
      'binary: ' + charCode.toString(2)
    );
  }
};
// getCharCodes('tacocat0`');

const input2 = [7, 116, 4, 19];
function getHexCode(arr) {
  arr.forEach((i) => {
    console.log(i.toString(16));
  });
}
getHexCode(input2);
// console.log(handleLongString(input));
function parseHex(n) {
  console.log(parseInt(n, 16));
}
parseHex('07740413');
