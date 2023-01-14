
// alert("Hello From External");

// 1-	Create a function that takes two numbers as arguments and returns their sum.
// + operator convert string to number && Concatenate Strings 

var num1 =window.prompt("Enter The first Number") ;
var num2 =window.prompt("Enter The second Number") ;

function addition( n1, n2) {
    return n1 + n2;
}

console.log("The Addition of the Numbers = " + addition(+num1, +num2));


// 2-	Write a function that takes the base and height of a triangle and return its area.

var base    =window.prompt("Enter triangle  base") ;
var height  =window.prompt("Enter triangle  height") ;

function triArea( n1, n2) {
    return (1/2) * n1 * n2;
}

console.log("The Area of the triangle = " + triArea(+base, +height));




// 3-	Write a function that returns the string "something" joined with a space " " and the given argument a.


var str1    =window.prompt("Enter The first String") ;
var str2  =window.prompt("Enter The Second String") ;

function concatStrings( s1, s2) {
    return   s1 + " " + s2;
}

console.log(concatStrings(str1,str2));






