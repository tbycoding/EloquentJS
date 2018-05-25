/* **Instructions** 
write a program that returns numbers from 1 to 100. For numbers divisible by 3, print "Fizz" instead of the number. For numbers divisble by 5, print "Buzz" instead of the number. For numbers divisble by both 3 and 5, print "FizzBuzz" */

//solution 5/23/18

function fizzBuzz(num){
  for (let i = 0; i <= num; i++){
    let output = "";
    if (i % 3 == 0) output += "Fizz";
    if (i % 5 == 0) output += "Buzz";
    console.log(output || i)
  }
}

fizzBuzz(100);

//initial solution 5/23/18
/*
function fizzBuzz(num){
  for (let i = 1; i <= num; i++){
    if (i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz")
    } else if (i % 3 == 0){
      console.log("Fizz");
    } else if (i % 5 == 0){
      console.log("Buzz");
    } else {console.log(i)}
  }
}

fizzBuzz(100);
*/