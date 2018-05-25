/* **Instructoins**
Write a loop that makes seven calls to console.log to output the following:
#
##
### etc. */

//solution 5/24/18

function hashMe(num){
  for (let hash = "#"; hash.length <= num; hash += "#")
    console.log(hash); 
}
hashMe(7)


//initial solution 5/23/18
/*
function hashMe(num){
  let hash = "#";
  for (let i = 0; i < num; i++){
    console.log(hash);
    hash += "#";
  }
}

hashMe(7);
*/