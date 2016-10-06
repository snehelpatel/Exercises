// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

numbers.sort (function largestNumber (x, y) {
  return (y-x)}) [0];


// ---------------------------
// 2. Find longest string
// --------------------------
var strings = ['this','is','a','collection','of','words'];

  strings.sort(function longestString (x , y) {

  return y.length - x.length; })[0];


// ---------------------------
// 3. Find even numbers
// ---------------------------

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function even (num) {
  return num % 2 === 0
};
numbers. filter (even);



// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
