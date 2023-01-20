//Write a sample program that uses variables, functions, loops and control flow to solve a simple problem 
//(e.g. calculating the factorial of a number or calculate the compound Interest).


//PROBLEM
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may not use the same element twice.

//Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

function twoSum(nums, target) {
    let length = nums.length;
    for(i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        let diffIndex = nums.indexOf(diff);
        if(diffIndex !== -1 && diffIndex !== i) {
            return [i, diffIndex];
        }
    }
};

console.log(twoSum([2, 7, 11, 5], 9)); //expected [0, 1]
console.log(twoSum([3, 2, 4], 6));  //expected [1, 2]
console.log(twoSum([15, 7, 11, 2], 9)); //expected [1, 3]

//Alternative approach
const sumOfTwo = (numbers, result) => {
    let length = numbers.length;
    for (let i = 0; i < length; i++) {
        for(let j = i + 1; j < length; j++) {
            let total = numbers[i] + numbers[j];
            if(total === result) {
                return [i, j];
            }
        }
    }
};

console.log(sumOfTwo([2, 7, 11, 5], 9)); //expected [0, 1]
console.log(sumOfTwo([3, 2, 4], 6));  //expected [1, 2]
console.log(sumOfTwo([15, 7, 11, 2], 9)); //expected [1, 3]

