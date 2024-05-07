function findIndex(array, word){
  let index = -1;
  for (let i =0; i<= array.length -1; i++){
    if (array[i] === word){
      index = i;
      break;
    }
  }
  console.log(index)


}

findIndex(['green', 'red', 'red', 'blue'], 'red');
findIndex(['green', 'red', 'red', 'blue'], 'yellow')