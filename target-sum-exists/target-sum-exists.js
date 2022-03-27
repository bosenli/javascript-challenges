// const targetSumExistsInTwoNumbers = (list, target) => {
//   return false
// }

// const targetSumExistsInThreeNumbers = (list, target) => {
//   return false
// }

// module.exports = {
//   targetSumExistsInTwoNumbers,
//   targetSumExistsInThreeNumbers
// }

const targetSumExistsInTwoNumbers = (list, target) => {
  for(let i = 0; i < list.length - 1; i++){
    for(let j = i+1 ; j < list.length; j++){
      if(Math.abs(list[i] + list [j]) === target)
      return true;
    }
  }
return false
}

const targetSumExistsInThreeNumbers = (list, target) => {
let sum = 0;
for(let i = 0; i < (list.length - 2); i++){
    for(let j = i+1,k = (i+2); j < list.length-1 && k < list.length; j++,k++){
        sum = Math.abs(list[i] + list[j] + list[k]);
        console.log(sum)
        if(sum === target)
            return true
        j--;
        }  
}
return false
}

module.exports = {
targetSumExistsInTwoNumbers,
targetSumExistsInThreeNumbers
}