/** Problem statement
https://leetcode.com/contest/weekly-contest-250/problems/add-minimum-number-of-rungs/
https://leetcode.com/problems/add-minimum-number-of-rungs/

 *

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
   rungs.unshift(0);
    let needed = 0;
    for(let i=0;i<rungs.length-1;i++){
        let diff = rungs[i+1]-rungs[i];
        if(diff>dist){
            needed = needed + Math.ceil(diff/dist)-1;
        }
    }
    return needed;
};