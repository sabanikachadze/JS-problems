// let obj1= { a: 1, b: { c: 2 } };
// let obj2= { a: 1, b: { c: 2 } };
// function deepComparison (first, second) {
//   if(first === second) return true
//   if(first === null || second === null) return false
//   if(typeof first !== 'object'  || typeof second !== 'object') return false
//   let first_keys = Object.getOwnPropertyNames(first)
//   let second_keys = Object.getOwnPropertyNames(second)
//   if(first_keys.length !== second_keys.length) return false
//   for(let key of first_keys) {
//     if(!Object.hasOwn(second, key)) return false
//     if (deepComparison(first[key], second[key]) === false) return false
//   }
//   return true
// }
// console.log(deepComparison( obj1,obj2 ))

// function deepComparison(obj1, obj2) {
//   if (obj1 === null || obj2 === null) {
//     return "Wrong Input";
//   }

//   const entriesObj1 = Object.entries(obj1);
//   const entriesObj2 = Object.entries(obj2);

//   if (entriesObj1.length !== entriesObj2.length) return false;

//   for (let i = 0; i < entriesObj1.length; i++) {
//     const [key1, value1] = entriesObj1[i];
//     const [key2, value2] = entriesObj2[i];

//     if (key1 !== key2) return false;

//     if (typeof value1 === "object" && typeof value2 === "object") {
//       if (!deepComparison(value1, value2)) return false;
//     } else if (value1 !== value2) return false;
//   }

//   return true;
// }

// console.log(deepComparison({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));

// const deepComparison = (obj1, obj2) =>
//   JSON.stringify(obj1) === JSON.stringify(obj2);

// let obj1 = { a: 1, b: { c: 2 } };
// let obj2 = { a: 1, b: { c: 2 } };

// console.log(deepComparison(obj1, obj2));