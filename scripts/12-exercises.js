const multiply = (a, b) => a*b;

console.log(multiply(2, 3))

let count = 0;
function countPositive(nums){
  nums.forEach(element => {
    if (element > 0){
      count += 1;
    }
    
  });
  console.log(count)
}
countPositive([1, -3, -5, 4, 7])

function addNum(array, num){
  return array.map(element => element + num)
}
console.log(addNum([1, 2, 4], 3))

function removeEgg(foods){
  return foods.filter(element => {
    if (element ==='egg'){
      return false;
    } else{
      return true;
    }
  })
}
console.log(removeEgg(['egg', 'apple', 'ham', 'egg', 'cream', 'egg']))



function removeEgg1(foods){
  let eggCount = 0;
  return foods.filter(element => {
    if (element ==='egg' && eggCount < 2){
      eggCount ++;
      return false;
      
    } else{
      return true;
    }
  })
}
console.log(removeEgg1(['egg', 'apple', 'ham', 'egg', 'cream', 'egg']))