var weight=60;
var height=160;

var readline = require("readline-sync");

var weight = readline.question("Please enter your weight in (10~200kg): ");
var height = readline.question("Please enter your height in (10~200cm): ");

while(true){
    weight = readline.questionfloat("Please enter your weight in (10~200kg): ");
if(weight < 10 || weight > 200)
    console.log("Plase 10~200!"){
    continue;
}else
    break;



var bmi = weight/((height/100)**2);
console.log("Hello! Your BMI value is "+ bmi);

function test(weight=70){     
    var weight=50;     
    console.log("weight="+weight)
    return weight;
 }  
var result=test(90);

  console.log("weight="+weight)