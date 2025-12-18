// Chp 17 to 20

// Q1
var multiArray = [];
// Q2
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

// Q3
for (var i=1; i<=10; i++){
    console.log(i);
}

// Q4
document.write("<h2>Chp:17 to 20 Q4 </h2>");
 var table = +prompt("Q4: Enter a number to show its multiplication table")
 var tableLength = +prompt('Q4: Enter length multiplication table ')

 for(var i = 1; i <= tableLength; i++){
    
     document.write(table + '  x 1'+  i + ' = ' + table * i + "<br/>")
 }

//  Q5
document.write("<h2>Chp:17 to 20 Q5 </h2>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Print fruits
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

document.write("<br>");

// Print index with element
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// Q6
document.write("<h2>Chp:17 to 20 Q6 </h2>");
// a. Counting
document.write("<b>Counting:</b><br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<br><br>");

// b. Reverse counting
document.write("<b>Reverse counting:</b><br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<br><br>");

// c. Even
document.write("<b>Even:</b><br>");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

document.write("<br><br>");

// d. Odd
document.write("<b>Odd:</b><br>");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}

document.write("<br><br>");

// e. Series
document.write("<b>Series:</b><br>");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
    
}
document.write("<br><br>");


// Q7
var items = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt(
    "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
);

userInput = userInput.toLowerCase().trim();

var found = false;

for (var i = 0; i < items.length; i++) {
    if (items[i] === userInput) {
        alert(userInput + " is available at index " + i + " in our bakery");
        found = true;
        break;
    }
}

if (!found) {
    alert("We are sorry. " + userInput + " is not available in our bakery");
}

// Q8
document.write("<h2>Chp:17 to 20 Q8 </h2>");
var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.write("Array items: " + A + "<br>");
document.write("The largest number is " + largest);

// Q9
document.write("<h2>Chp:17 to 20 Q9 </h2>");

var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

document.write("Array items: " + A + "<br>");
document.write("The smallest number is " + smallest);

// Q10
document.write("<h2>Chp:17 to 20 Q10 </h2>");

for (var i = 5; i <= 100; i += 5) {
    document.write(i + ", ");
}