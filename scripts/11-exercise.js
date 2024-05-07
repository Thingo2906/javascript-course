const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

function getLastValue(array){
  const lastIndex = array.length -1;
  console.log(array[lastIndex]);
}
getLastValue([1, 30, 20, 24]);

function arraySwap(array){
  // array[-1] is not work for javascript
  let temp = array[0];
  array[0] = array[array.length-1];
  array[array.length -1] = temp;
  console.log(array)
}
arraySwap([1, 20, 22, 6])

for (let i = 0; i <= 10; i+=2){
  console.log(i);
}

for (let i=5; i >=0; i--){
  console.log(i);

}

// let i = 0;
// while(i<=10){
//   console.log(i);
//   i +=2;
// }

let i =5;
while(i>=0){
  console.log(i);
  i--;
}

const array = [1, 2, 3];
const newArray = [];
for (let i =0; i<= array.length -1; i++){
  newArray.push(array[i]+1);
  

}
console.log(newArray);

function addOne(array){
  for (let i = 0; i<= array.length -1; i++){
    array[i] = array[i] + 1;
    
  }
  console.log(array);
 
}

addOne([1, 2, 3]);

function addNum(array, num){
  for (let i =0; i<= array.length -1; i++){
    array[i] = array[i] + num;
  }
  console.log(array)
}

addNum([1, 2, 3], 3);
addNum([-2, -1, 0], 2);

let myArray =[];
function addArray(array1, array2){
  for (let i = 0 ; i<= array1.length -1; i++){
    myArray.push(array1[i]+array2[i])
   
  }
  console.log(myArray);
  
}

addArray([1, 2, 3], [2, 3, 4]);

let count =0;
function countPositive(nums){
  for (let i = 0; i <= nums.length -1; i++){
    if (nums[i] >0){
      count = count +1;
    }
  }
  console.log(count)

}

countPositive([-1, -2, -5, 4, 5, 7, 30]);

function minMax(nums){
  let minNum = nums[0];
  let maxNum = nums[0];
  if (nums.length >= 1){
    for (let i =0; i<=nums.length -1; i++){
      if (nums[i] < minNum){
        minNum = nums[i];

      }
      if (nums[i] > maxNum){
        maxNum = nums[i]
     }

    }
    console.log({min: minNum, max: maxNum});
  
  }
  if (nums.length ===0){
    console.log({min: null, max: null});

  }
  
}
minMax([]);


let countObject = {};
function countWords(words){
  for (let i =0; i<= words.length -1; i++){
    if (countObject[words[i]]){
       countObject[words[i]] = (countObject[words[i]]) + 1

    } else{
      countObject[words[i]] = 1;
    }
     
    
  }
  console.log(countObject)

}
countWords(['apple', 'grape', 'apple', 'banana'])