PSEUDO CODE
Requirement: input 4 ASCII characters and output an encoded integer value, base 10.

1. Reverse characters
2. Get charCode of each character
3. Convert charCode to binary
   [ '01000100', '01000101', '01010010', '01000110' ]
4. Re-format input as below
   [
   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
   ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'],
   ['q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
   ['y', 'z', '1', '2', '3', '4', '5', '6'],
   ];

5. Re-order(encode) binary digits per spec
   - This yields 4 new binary expressions
     [
     ['a', 'i', 'q', 'y', 'b', 'j', 'r', 'z'],
     ['c', 'k', 's', '1', 'd', 'l', 't', '2'],
     ['e', 'm', 'u', '3', 'f', 'n', 'v', '4'],
     ['g', 'o', 'w', '5', 'h', 'p', 'x', '6'],
     ];
6. Format each role as an 8 character binary
   ['01000100']
7. Convert to html value to binary
8. Parse the binary to an integer value base 10
9. Get the hex representation of that value
10. Chain the four hex representations and then convert that to a decimal. This is your final sollution.

**Handle Long String**

**_encoding_**

- Strings of length > 4 get bundled into 4 character segments.
- These get reversed.
- if a bundle has fewer than 4 characters, it is zero padded, with a binomial '00000000'
- each bundle is passed to the encode function and the results chained in sequence.
- note characters in bundles are reversed but the order of bundles (corrsponding to the order of words in the original input string) are not reversed.
