// Given a list of numbers, return whether any two sums to k. 
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

let arr = [10,15,3,7]
let sum = 17
 
function doesItEqual(nums, target){
    let obj = {}
    for(let num of nums){
        if(!obj[num]){
            obj[num] = target - num
        }
    }

    for(let key in obj){
        if(obj[obj[key]]){
            return true
        }
    }

    return false
}

console.log(doesItEqual(arr, sum))