function findIndex(array, word){
  let index = -1;
  for (let i =0; i<= array.length -1; i++){
    if (array[i] === word){
      index = i;
      break;
    }
  }
  return index


}


function unique(array){
  let uniqueArray = [];
  for (let i = 0; i <= array.length -1; i++){
    if (findIndex(uniqueArray, array[i]) === -1){
      uniqueArray.push(array[i])
    }
  }
  console.log(uniqueArray)

}

unique(['green', 'red', 'red', 'blue']);

