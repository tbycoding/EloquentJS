/* **Instructoins**
Write a loop that makes seven calls to console.log to output the following:
#
##
### etc. */

//initial solution 5/23/18

function hashMe(num){
  let hash = "#";
  for (let i = 0; i < num; i++){
    console.log(hash);
    hash += "#";
  }
}

hashMe(7);