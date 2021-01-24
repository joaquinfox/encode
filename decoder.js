const decodeTestInput = [267389029,250613450,17829888]

function decoder (inputArr) {
  let solution =[]
  for (let i = 0; i < inputArr.length; i++) {
    // Make hexadecimal
    let hex = inputArr[i].toString(16)
    console.log(hex)

    if (hex.length < 8) {
      let n = hex.length
      while (n < 8) {
        hex = '0' + hex
        n++
      }
    }

    hex = hex.match(/../g)
    console.log('hex',hex)

    // Get charCodes
    let charCodes = []
    hex.forEach(i => {
      return charCodes.push(parseInt(i, 16))
    })
    console.log('charCodes', charCodes)
    // Make binary numbers
    let binaries = []
    charCodes.forEach(i => {
      return binaries.push(i.toString(2))
    })
// console.log(binaries)
    // Zero pad binary numbers
    let zeroPadded = []
    binaries.forEach(i => {
      if (i.length < 8) {
        let n = i.length
        while (n < 8) {
          i = '0' + i
          n++
        }
        zeroPadded.push(i)
      } else {
        zeroPadded.push(i)
      }
    })
console.log('zeroPadded', zeroPadded)
    // Split each binary into arrays of 8 digits
    let sectionedBinaries = []
    for (let i = 0; i < zeroPadded.length; i++) {
      zeroPadded[i] = zeroPadded[i].split('')
      sectionedBinaries.push(zeroPadded[i])
    }
    // console.log('sectionedBinaries',sectionedBinaries)
    // Unscramble
    let output = [[], [], [], []]
    let arr = sectionedBinaries
    output[0][0] = arr[0][0]
    output[1][0] = arr[0][1]
    output[2][0] = arr[0][2]
    output[3][0] = arr[0][3]
    output[0][1] = arr[0][4]
    output[1][1] = arr[0][5]
    output[2][1] = arr[0][6]
    output[3][1] = arr[0][7]

    output[0][2] = arr[1][0]
    output[1][2] = arr[1][1]
    output[2][2] = arr[1][2]
    output[3][2] = arr[1][3]
    output[0][3] = arr[1][4]
    output[1][3] = arr[1][5]
    output[2][3] = arr[1][6]
    output[3][3] = arr[1][7]

    output[0][4] = arr[2][0]
    output[1][4] = arr[2][1]
    output[2][4] = arr[2][2]
    output[3][4] = arr[2][3]
    output[0][5] = arr[2][4]
    output[1][5] = arr[2][5]
    output[2][5] = arr[2][6]
    output[3][5] = arr[2][7]

    output[0][6] = arr[3][0]
    output[1][6] = arr[3][1]
    output[2][6] = arr[3][2]
    output[3][6] = arr[3][3]
    output[0][7] = arr[3][4]
    output[1][7] = arr[3][5]
    output[2][7] = arr[3][6]
    output[3][7] = arr[3][7]
    // FORMAT OUTPUT
    for (let i = 0; i < output.length; i++) {
      // Get rid of commas
      output[i] = output[i].toString().replace(/,/g, '')

      // Get html values
      output[i] = parseInt(output[i], 2)

      // Get characters
      output[i] = String.fromCharCode(output[i])
    }
    // Reverse and join
  output= output.reverse().join('')
  solution.push(output)
  }
console.log(solution.join(''))
}
decoder(decodeTestInput)
