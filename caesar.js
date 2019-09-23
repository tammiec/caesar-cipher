const encrypt = function(plaintext, key) {
  let outgoing = "";
  const alphabet = [
    "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y",
    "z"
  ];
  let regex = /[a-z]/;
  plaintext = plaintext.toLowerCase();

  for (let i = 0; i < plaintext.length; i++) {
    let index = alphabet.indexOf(plaintext[i]);
    // console.log("index before if: ", index);
    if (regex.test(plaintext[i])) {
      index += key;
      (index < 0)
        ? outgoing += alphabet[alphabet.length + index]
        : (index >= alphabet.length)
          ? outgoing += alphabet[index % alphabet.length]
          : outgoing += alphabet[index];
    } else {
      outgoing += plaintext[i];
    }
  }
  return outgoing;
};

// console.log(encrypt("animal", -2));
module.exports = {encrypt};

// ALTERNATIVE CODE OPTION
// const encrypt = function(plaintext, key) {
//   let nowArray = plaintext.split('');
//   let output = [];
//   nowArray.forEach(function(elem) {
//     let letToNum = elem.charCodeAt() + key;
//     if (letToNum < 97) {
//       output.push(String.fromCharCode(123 - (97 - letToNum)));
//     } else if (letToNum > 122) {
//       output.push(String.fromCharCode(97 + (letToNum - 123)));
//     } else {
//       output.push(String.fromCharCode(letToNum));
//     }
//   });
//   return output.join('').replace('?', ' ');
// };
