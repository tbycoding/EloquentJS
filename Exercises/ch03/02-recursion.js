// initial answer 5/29/18

function isEven(num){
  if (num < 0) return isEven(num * -1); //or -num instead of num*-1
  else if(num === 0) console.log(true);
  else if (num === 1) console.log(false);
  else return isEven(num - 2);
}

isEven(integer)