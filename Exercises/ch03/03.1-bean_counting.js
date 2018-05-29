//initial solution 5/19/18

function countBs(str){
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] == "B") count++;
  } console.log(count);
}

countBs("string")