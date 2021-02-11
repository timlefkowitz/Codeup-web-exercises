// var num = prompt("Give me an odd number 1 to 50");
//
// if(num = x % 2 !==0){
//     return (prompt(num + "this is an even number");
// } else {
//     return (prompt("That is not an odd number! please choose again")) + num)
// }
//
// for (var i = 0; i < 50; i++){
//     if (i % 2 !==0) {
//         console.log(i + " is odd.");
//         continue;
//     } else {
//         console.log(i + " is even.")
//     }
//
// }

var usernum = prompt("Please enter a number 1 through 50");

for (var i = 0; i < 50; i++) {
    if (i % 2 !==0) {
        console.log("Here is an odd number: " + i);
        continue;
    } if ( i === usernum){
        console.log("Yikes! Skipping number: " + usernum);
    }
}