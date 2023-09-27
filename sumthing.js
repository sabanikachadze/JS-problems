// funciton works to find how many time a string or number have been repeated in one sentence of group of sentences
// function unknown(one,two){
//   let result = 0 ;
//   for( let i = 0; i <= one.length ; i++ ){
//     if( one[i] === two ){
//       result++
//     }
//   }

// this changes numbers row by big to small
   
//    return result
// }
// console.log(unknown("saba","a"))
// let numbers =[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// function sorting(arr){
//   return arr.sort((a,b) => b - a )
// }
// console.log(sorting(numbers))

// this function finds biggest string in array

// let Longest_Country_Name = ["Australia", "Germany", "United States of America"]
// function longest(countryes){
//   countryes.sort(((a, b) => a.length - b.length))
//   return countryes.pop()
// }
// console.log(longest(Longest_Country_Name))



// let array = [1,2,3,4,5]
// function numbers(num){
//   num.sort((a,b) => a - b)
//   let result = num.shift(num[0]) + num.pop(num.length - 1,)
//   return result.join(",")
// }
// console.log(numbers(array))

// function Second_Greatest_Lowest(arr_num)
// {
//   arr_num.sort(function(x,y)
//            {
//            return x-y;
//            });
//   var uniqa = arr_num;
//   var result = [];
//     result.push(uniqa[1],uniqa[uniqa.length - 2]);                                          
//   return result;
//   }

// console.log(Second_Greatest_Lowest([1,2,3,4,5]));


// function Second_Greatest_Lowest(arr_num)
// {
//   arr_num.sort(function(x,y)
//            {
//            return x-y;
//            });
//   var uniqa = [arr_num[0]];
//   var result = [];
  
//   for(var j=1; j < arr_num.length; j++)                                   
//   {
//     if(arr_num[j-1] !== arr_num[j])
//     {
//       uniqa.push(arr_num[j]);
//     }
//   }
//     result.push(uniqa[1],uniqa[uniqa.length-2]);
//   return result.join(',');
//   }

// capitaliezing first word in every sentence

// console.log(Second_Greatest_Lowest([1,2,3,4,5]));

// let inform = "the quick brown fox" 
// function upcase(letter){
//   let words = letter.split(" ")
//   for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].substr(1)
//   }
//   return  words.join(" ")
// }
// console.log(upcase(inform))
 
// let possibleCombinations = (str) => {
//   let combinations = [];
//   for (let i = 0; i < str.length; i++) {
//       for (let j = i + 1; j < str.length + 1; j++) {
//           combinations.push(str.slice(i, j));
//       }
//   }
//   return combinations;
// }
// console.log(possibleCombinations('Dog'));


