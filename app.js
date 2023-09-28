// var maxSubArray = function(nums) {
//   let sum = 0,
//    result = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//       sum = Math.max(nums[i], sum + nums[i]);
//       result = Math.max(sum, result);
//   
//   return result ;
// };

// console.log(
// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]),
// );

// let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// function maxSubArray(nums) {
//   let max=nums[0];
//   let sum=nums[0];
//   for(let i = 1 ; i < nums.length; i++ ){
//     if(sum+nums[i] > nums[i]){
//       sum += nums[i];
//     }else{
//       sum = nums[i]
//     }
//     max = Math.max(max,sum)
// }
// return max
// } 
// console.log(maxSubArray(array))


// var maxSubArray = function(nums){
//   let sum = 0;
//   let result = nums[0];
//   for(let i = 0 ; i <= nums.length; i++){
//     sum = Math.max(nums[i], sum - nums[i])
//     result = Math.max(sum,result)
//   }
//   return result
// }

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// let array = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
// function arrayRotation(arr,numberOfshifts){
//   let numbers = 0;
//   let result=[]
//   for(let i = 1; i <= numberOfshifts; i++){
//     arr.unshift(arr.pop());
//   }
//   return arr
// }
// console.log(arrayRotation(array,k))

// let array = [3, 0, 1] ;
// function missingNumber(arr){
//  let missArray=[];
//  let minNum = Math.min(...arr);
//  let maxNum = Math.max(...arr);
//  for(let i = minNum ; i < maxNum ; i++){
//   if(arr.indexOf(i) < 0){
//     missArray.push(i)
//   }
//  }
//  return missArray ;
// }
// console.log(missingNumber(array))

// function mergeIntervals(intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);

//   let mergedIntervals = [];
//   let currentInterval = intervals[0];

//   for (let i = 1; i < intervals.length; i++) {
//     let interval = intervals[i];

//     if (interval[0] <= currentInterval[1]) {
//       currentInterval[1] = Math.max(currentInterval[1], interval[1]);
//     } else {
//       mergedIntervals.push(currentInterval);
//       currentInterval = interval;
//     }
//   }
//   return mergedIntervals;
// }

// console.log(
//   mergeIntervals([[1, 3],[2, 6],[8, 10],[15, 18]])
// );