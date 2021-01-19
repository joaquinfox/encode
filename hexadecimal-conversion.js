// MOCKUP

function dToH(n) {
  // Convert decimal inputs to hexadecimal outputs
  let hex = '';
  while (n > 0) {
    let remainder = n % 16;
    switch (remainder) {
      case 10:
        remainder = 'A';
        break;
      case 11:
        remainder = 'B';
        break;
      case 12:
        remainder = 'C';
      case 13:
        remainder = 'D';
        break;
      case 14:
        remainder = 'E';
        break;
      case 15:
        remainder = 'F';
    }
    hex = remainder + hex;
    n = Math.floor(n / 16);
  }
  return hex.length % 2 ? '0' + hex : hex;
}

console.log(dToH(70));

// function strSplitter(str) {
//   return (str.length % 2 ? str + '_' : str).match(/../g);
// }
// console.log(strSplitter('abc'));
/**************************** */
