//Question 1
var myCity = prompt("Enter your city");
if(myCity=="karachi"){
    alert("Welcome to city of light")
}
// Question2 
var gender = prompt("Enter youir gender")
if(gender=="male"){
    alert("Good morning Sir!")
}
else if(gender=="female")  {
    alert("Good morning Ma'am!")
}
else {
    alert("Sorry!! Enter correct input")
}
// Question3
var info = prompt("Enter color name")
if(info=="red"){
    console.log("Must stop")
}
else if ( info == "green"){
    console.log("Move now");
    
    
} 
else if (info == "Yellow") {
    console.log("Ready to move ")
}
// Question4 
var feul = +prompt("enter you details")
if (feul < "0.25") {
console.log( "Please refill the fuel in your car" );

}
else {
 console.log("You have sufficient feul")
 
}
// Question5
var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
} 
 var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 
 var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
} 
 var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} 
 if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
}
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    } 
// Question6
var marks = +prompt("Entery your Obtains marks")
var total = (marks/300)*100;
if ( total  == 100 || total >= 80) {
    console.log("Obtain marks =    " + marks )
    console.log("Percentage =    " + total  + "   %" )
    console.log("Grade A+")
    console.log("Remarks:  you are excellent")
}
 else if ( total  == 79 || total >= 70) {
    console.log("Obtain marks =    " + marks )
    console.log("Percentage =    " + total  + "%" )
    console.log("Grade B")
    console.log("Remarks:  you are good")
}
 else if ( total  == 69 || total >= 60) {
    console.log("Obtain marks =    " + marks )
    console.log("Percentage =    " + total  + "%" )
    console.log("Grade c")
    console.log("Remarks:  you need improve yourself")
}
 else  {
    console.log("Obtain marks =    " + marks )
    console.log("Percentage =    " + total  + "%" )
    console.log("Fail")
    console.log("Remarks:  you need much struggle !! try next time")
}
// Question7 
var secretNum = 5;
var guessNum = +prompt("Enter a number from 1 to 10");
if(secretNum == guessNum){
    console.log("Bingo! Correct answer")
}
else if ( secretNum == ++guessNum) {
console.log("Close enough to the correct answer");

}
else{
    console.log("your are not correct");
    
}
// Question8
var divideNum = +prompt("write a number");
if(divideNum % 3 === 0) {
    console.log("your number is  divisible to 3 ");
    
}
else{
    console.log("your number is not   divisible to 3 ");
}
// Question9
var evenOddeNum = +prompt("write a number to check odd or even");
if(evenOddeNum % 2 === 0) {
    console.log("The number is even!!! ");
    
}
else{
    console.log("The number is odd");
}
// Question10
var temperature = +prompt("Enter yours city temperature ");
if (temperature > 40 || temperature == 50) {
    console.log("It is too hot outside.");
    
}
 else if (temperature > 30 || temperature == 40) {
    console.log("The Weather today is Normal.");
    
}
else if (temperature > 20 || temperature == 20) {
    console.log("Today’s Weather is cool.");
    
}
else if (temperature <= 10 ) {
    console.log("OMG! Today’s weather is so Cool.");
    
}
// Question11
var numA = +prompt("enter First number");
var numB = +prompt("enter Second number");
console.log(numA+numB)
console.log(numA-numB)
console.log(numA/numB)
console.log(numA*numB)
console.log(numAnumB)


