const input = 'abcde';

if (input.length > 4) {
  thingOne(input);
} else {
  thingTwo(input);
}

function thingOne(str) {
  let arr = str.split('');
  // arr.push('from thing one');
  // thingTwo(arr);
  if (arr.length % 4) {
    let n = arr.length;
    while (n % 4) {
      arr.push('&');
      console.log(arr);
      n++;
    }
    // arr.push('is a little something extra');
    thingTwo(arr);
  } else {
    // console.log('is very short');
    thingTwo(str);
  }
  for (let i = 0; i < arr.length; i++) {
    thingTwo(arr[i]);
  }
}

function thingTwo(foo) {
  console.log('from ThingTwo', foo);
}
