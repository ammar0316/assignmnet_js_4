
// Question 1
var num1 = +prompt("Enter the number");
if(num1 >= 76 && num1<= 90) {
    alert("this is upper case");
}
 else if(num1 >= 97 && num1 <= 122) {
    alert("this is lower  case");
}
else {
    alert("this is a number");
}
//Question2
var num2 = +prompt("Enter first number")
var num3 = +prompt("Enter second number")
if(num2 >= num3){
    alert(num2)
}
 else if(num3 >= num2){
    alert(num3)
}
else {
    alert("enter correct number")
}
// Question3
var userNum = +prompt("Enter a number!")
if(userNum >= 1 ){
    alert("This is a possitive number");

}
else if (userNum == 0){
    alert("This is zero!")
}
else{
    alert("This is a negative number!")
}
//Question4 
var alphabet = prompt("write any alphabet.", "a");
if(alphabet === "a" || alphabet === "e" || alphabet === "i" |alphabet === "o" ||alphabet === "u"){
    alert("This is vowel");
}
else{
    alert("This is Consunent")
}
// Question5
var pas1 = prompt("Enter new passwords")
var pas2 = prompt("Write again previous passwords")
if(pas1===pas2){
    alert("correct passwords")
}
else {
    alert("incorrect passwords")
}
// Question
var greeting;
var hours = 13;
if(hours < 18){
greeting = "Good day"
}
else{
    greeting = "Good Eveving"
}
// alert(greeting);
var timeNum = +prompt("Enter a number between 0000 to 2400")
if(timeNum >= "0000" && timeNum < 1200) {
    alert("good morning")
}
else if (timeNum >= 1200 && timeNum < 1700) {
    alert("good afternoon");
}
else if (timeNum >= 1700 && timeNum < 2100) {
    alert("good Eveving");
}
else if(timeNum >= 2100 && timeNum < 2159) {
    alert("good night");
}
else {
    alert("enter a number between limitation");
}