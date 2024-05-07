function removeEgg(foods){
  let result =[];
  for (let i =0; i<= foods.length -1; i++){
    if(foods[i] === 'egg'){
      continue;
      
    } else{
      result.push(foods[i]);
    }
  }
  //console.log(result);
  return result;

}
results = removeEgg(['egg', 'apple', 'egg', 'ham', 'egg'])
console.log(results);

function removeEggs(foods){
  let resultss =[];
  let eggCount = 0;
  for (let i =0; i<= foods.length -1; i++){
    if(foods[i] === 'egg' && eggCount < 2){
      eggCount ++;
    } else{
      resultss.push(foods[i]);
    }
  }
  //console.log(result);
  return resultss;

}
resultss = removeEggs(['egg', 'apple', 'egg', 'ham', 'egg'])
console.log(resultss);

function removeEggss(foods){
  let resultss =[];
  const reverse_food = foods.reverse();
  let eggCount = 0;
  for (let i =0; i<= reverse_food.length -1; i++){
    if(reverse_food[i] === 'egg' && eggCount < 2){
      eggCount ++;
    } else{
      resultss.push(reverse_food[i]);
    }
  }
  //console.log(result);
  return resultss.reverse();

}
resultsss = removeEggss(['egg', 'apple', 'egg', 'ham', 'egg'])
console.log(resultsss);

