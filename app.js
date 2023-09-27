// function isEven(N){
//   if(N == 0){
//     return true
//   }else if(N == 1){
//     return false
//   }else if(N > 0){
//     return isEven(N -2)
//   }else{
//     return isEven(-N)
//   }
// }
// console.log(isEven(10))

// function factorial(number){
//  let result = 1;
//  for(let i=1 ; i <= number ; i++){
//   result *= i
//  }
//  return result;
// }
// console.log(factorial(8))

// function factorial(n) {
//   if (n === 0 || n === 1) {
//       return 1;
//   } else {
//       return n * factorial(n - 1);
//   }
// }
// console.log(factorial(5))
// function samkutxedi(cvladi){
//   for(let i =0 ; i <= cvladi ; i++){
//     for(let j =0; j <= cvladi ; j++){
//       console.log("#")
//     }
  
//   }
// }
// samkutxedi(5)
// function triangle(hashtags){
// for (let result = "#"; result.length <=hashtags; result = result + "#")
//     console.log(result);
// }
// triangle(10)
// function triangle(sum){
//   if(sum === 0){
//     return ;
//   }
//   triangle(sum - 1)
//   let row=""
//   for(let i =0; i< sum; i++){
//     row+= "#"
//   }
//   console.log(row)
// }
// triangle(5)
// function outerFunc(idk){
//  return function innerFuntion(){
//     idk++
//     return idk
//   }

// }
// let counter = outerFunc(0);
// console.log(counter())

// let number=[100,25,43,6136,643];
// function sorter(sum,obj){
//   for(let i = 0; i <sum.length ; i++){
//     if(sum[i] === obj){
//       return true
//     }
//   }
//   return false
//   }
// console.log(sorter(number,43))

// let number=[100,25,43,6136,643];
// function sorter(sum,obj){
//   for(let i = 0; i <sum.length ; i++){
//     if(sum[i] === obj){
//       return true
//     }
//   }
//   return false
//   }
// console.log(sorter(number,25))

// let arr = [100,25,43,6136,643];
// function arrays(num){
//   return num.slice(3,4)
// }
// console.log(arrays(arr))

// const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

// const count = {};

// arr.forEach(element => {
//   count[element] = (count[element] || 0) + 1;
// });
// console.log(count)


// const arr = ['one', 'one', 'one', 'two', 'two', 'three'];
// function highest(random){
//    random.sort((a, b) => a.length - b.length)
//    return random.pop()
// }
// console.log(highest(arr))

// function longestWord(sentence){
//   let words = sentence.split(" ");
//   let longestWord = words[0] ;
//   for(let element of words){
//     if( element.length > longestWord.length){   
//       longestWord = element;
//     }
//   }
//   return longestWord.length;
// }
// console.log(longestWord("my is saba name?!"))