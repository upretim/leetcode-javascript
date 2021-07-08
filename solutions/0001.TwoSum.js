/** Problem statement
 * https://leetcode.com/problems/two-sum/
 *

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// brute force solution
 var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target) {
                return [i,j];
            }
        }
    }
};
// using javascript object as a container to remember iterated numbers
var twoSum = function(nums, target) {
    let holdingObj = {};
    for(let j=0;j<nums.length;j++){
           if (holdingObj[nums[j]] !==undefined){
               return [holdingObj[nums[j]], j]
           }
        holdingObj[target - nums[j]] = j;  
    }    
};

// using javascript map to keep track of visited numbers
var twoSum = function(nums, target) {
    let map = new Map();
     for(let i=0;i<nums.length;i++){
         let neededNumber = target - nums[i];
         if(map.has(neededNumber)) {
             let index = map.get(neededNumber);
             return [index, i];
         }
         map.set(nums[i], i);
        
     }
 };