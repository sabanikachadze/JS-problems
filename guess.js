// var a = 489;
// var b = prompt("Enter a number in between 1 and 1000");
// if (b == a) {
//     alert("You're right!");
// } else if (b > a) {
//     alert("Incorrect! Lower!");
// }else if (b < a) {
//   alert("Incorrect! Higher!");}
var a = 32;

while (true) {

   var b = prompt("Enter a number in between 1 and 100");

   if (b == a){
        alert("You're right!");
        break;
    }else if ( b>a){
      alert("Incorrect! Lower!");
    }else if(b < a) {
        alert("Incorrect! Higher!");
    }
  }