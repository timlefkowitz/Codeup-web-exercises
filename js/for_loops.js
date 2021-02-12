//
// /* Create a function named showMultiplicationTable that
// accepts a number and console.logs the multiplication table
// for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
// */
//
//
// function showMultiplicationTable (i){
//     var x = 1;
//     while(x < 10){
//         x++;
//         console.log(i * x);
//     }
// }
// showMultiplicationTable(7);
//
// /*
// Use a for loop and the code from the previous lessons to generate
// 10 random numbers between 20 and 200 and
// output to the console whether each number is odd or even. For example:
//  */
//
// for ( var i = 0 ; (Math.random() * 201) + 20; i++ ){
//     if(i % 2 == 0){
//         console.log(i + "even.")
//     } else {
//         console.log(i + "odd.")
//     }
// }
//
//
//
// /*Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// */
//
//
// var x = 1;
// for (x < 10; x++);
//
// var i = 1;
// for i < 10; i++;
//
// console.log(x + i);



/*   2   Create a function named showMultiplicationTable that
accepts a number and console.logs the multiplication table
for that number (just multiply by the numbers 1 through 10)
For example, showMultiplicationTable(7) should output
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
*/


function showMultiplicationTable (i){
    var x = 1;
    while(x < 11){

        console.log(i * x);
        x++;
    }
}
showMultiplicationTable(7);

/*  3
Use a for loop and the code from the previous lessons to generate
10 random numbers between 20 and 200 and
output to the console whether each number is odd or even. For example:
 */
//




for (var i = 1; i <= 10; i++){
    var random = Math.floor(Math.random() * (200-20)) + 20;
    if (random % 2 === 0){
        console.log(random + " is even.")
    } else {
        console.log(random + " is odd.")
    }



}


    /*  4  Create a for loop that uses console.log to create the output shown below.
    1
    22
    333
    4444
    55555
    666666
    7777777
    88888888
    999999999
    */


    for (var i = 1; i <= 9; i++) {

        var output = "";
        for (var innerLoop = 1; innerLoop <= i; innerLoop++) {

            output = output + innerLoop.toString();
        }
        console.log(output);
    }



    /*  5
    Create a for loop that uses console.log to create the output shown below.


    100
    95
    90
    85
    80
    75
    70
    65
    60
    55
    50
    45
    40
    35
    30
    25
    20
    15
    10
    5
     */
//


    for (var i = 100; i > 4; i = i - 5) {
        console.log(i);
    }
















    /*         Example Walk-Through    */


// var onTheRoad = true;
//
// while(onTheRoad) {
//     onTheRoad = confirm("Are we still traveling?")
// }
//
// alert("We're here?")
//
//
//
//     function decrementFromTen() {
//         var x = 10;
//
//         while (x > 0) {
//
//             console.log(x--.toString() + x--
//         .
//             toString()
//         )
//         }
//     }
//
//     decrementFromTen()
//
//
//     var weatherIsMessy = true;
//
//     while (weatherIsMessy) {
//         alert("Well, Lets have some hot chocolate!")
//         weatherIsMessy = confirm("Is it still messy outside?")
//     }
//
//     alert("Excellent - let's all go outside!")
//
//
// //do {
// // Code my do-while loop will run AT LEAST ONCE.
// //} while (condition to check to procees)
//
// // while(false){
// //     console.log("Will you ever see me?")
// // }
// //
// // do {
// //     console.log("Will you see me in the world of do while loop?")
// // } while(false)
//
//
//     for (var i = 20; i < 200; i++) {
//         if (i % 2 !== 0) {
//             console.log(i + " is odd.");
//             continue;
//         } else {
//             console.log(i + " is even.")
//         }
//     }
//
//
// // Close our lecture: let's do a CODE BUZZ
// // whenever a neumber is divisible by SIX: print CODEUP
// // whenever a neumber is divisible by TWO: print CODE
// // whenever a neumber is divisible by THREE: print UP
// // If num is 25, do not print that number
//
//     for (var i = 0; i < 50; i++) {
//         if (i % 6 === 0) {
//             console.log("CodeUp")
//         } else if (i % 2 === 0) {
//             console.log("Code")
//         } else if (i % 3 === 0) {
//             console.log("Up")
//         } else if (i === 25) {
//             continue;
//         } else {
//             console.log(i)
//
//         }
//     }
//
//
//     /*
//     order some food [entress] [do/while loop]
//     back of the house - preparation of food
//     how did we do? how many did we have?
//
//      */
//
//     do {
//         // execute some stuff at least once }
//         var orderingGood = true;
//         var entrees = parseInt(prompt("How many codeup curry order did you want?"))
//
//         if (entrees <= 0 || isNaN(entrees)) {
//             alert("Hey - you need to order at least one plate of food!")
//         } else {
//             orderingFood = false;
//             alert("Alright, we'll get your " + entrees + " orders of curry going in our back kitchen!")
//         }
//     } while (orderingfood)
//     while (entrees > 0) {
//         //do some stuff
//         alert("We still have orders to get out!");
//
//         var orderUp = confirm("Did you get that plate up? Ready to serve?");
//
//         if (orderUp) {
//             entrees--;
//             alert("Yeah! Let's see if we have another ticket left!")
//         } else {
//             alert("Alright - lets get this moving, we've got tickets left!")
//         }
//     }
//     alert("Phew - that was a lot of orders, but we did a great job getting them out! Hi5s")
// }
//
