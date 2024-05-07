// Find the first index of search
const strings =['apple', 'search', 'banana', 'search'];
let index = -1
for (let i =0; i<= strings.length -1; i++){
  if (strings[i] === 'search'){
    index = i;
   
  } 

}
console.log(index)

// Find all index of "search"
const string =['apple', 'search', 'banana', 'search'];
let ind = -1
for (let i =0; i<= string.length -1; i++){
  if (strings[i] === 'search'){
    ind = i;
    console.log(ind)
   
  } 

}


const array=['apple', 'search', 'banana', 'search'];
let indx = -1;
for (let i =0; i<= array.length -1; i++){
  if (array[i] === 'search'){
    indx = i;
    break;
  } 
}
console.log(indx);
