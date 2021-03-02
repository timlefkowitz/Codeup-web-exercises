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


function isNumInRange(num){
    return num >= 1 && num <= 50;
}
function isNumberEven(num){
    return num % 2 === 0;
}

while (true){
    var usernum = prompt("Please enter a number 1 through 50");
    if (!isNumberEven(usernum) && isNumInRange(usernum)){
        break;
    }
}

console.log("Number to skip is: " + usernum);

for (var i = 1; i <= 49; i+= 2){
    if (i === usernum){
        console.log("Yikes! Skipping number: " + usernum);
        continue
    }
    console.log("Here is an off number: " + i);
}