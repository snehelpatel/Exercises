// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in JavaScript.


function max(x, y){
if (x > y) {

return x}
else {
return y
}
}

//TERNARY CONDITIONALS----do them if they only require one line.
function {ternaryMax} (x,y) {
    return x > y ? x : y;
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z) {
 if (x >= y && z) {
 return x;
 }
 if ( y >= x && z) {
 return y;
 }
 else {return z;
 }

};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


function isVowel(char) {
  if (char ==="A" || char==="a" || char==="E" || char==="e" || char==="I" || char==="i" || char==="O" || char==="o" || char==="U" || char==="u" ) {
  return true
  }
  else {
      return false
  }
}

function cleanerIsVowel (char) {
  var vowels = ["a", "e", "i", "o", "u"];
  {
    return vowels.includes (char.toLowerCase())
  }
}
//if

// Write a function translate() that will translate a text into "Rovarspraket".
That is, double every consonant and place an occurrence of "o" in between.
For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  var newPhrase = "";
  for (var count = 0; count < phrase.length; count++) {
    var letter = phrase [count];
    if (cleanerIsVowel (letter) || letter === " ") {
      newPhrase += letter;
    } else {
      newPhrase += letter + "o" + letter;
    }
    }
  return newPhrase;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string.
For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  var letter = [];
  for ()

}
