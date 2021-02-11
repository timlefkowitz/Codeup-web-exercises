
/* Create a function named showMultiplicationTable that
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
    while(x < 10){
        x++;
        console.log(i * x);
    }
}
showMultiplicationTable(7);

/*
Use a for loop and the code from the previous lessons to generate
10 random numbers between 20 and 200 and
output to the console whether each number is odd or even. For example:
 */

for ( var i = 0 ; (Math.random() * 201) + 20; i++ ){
    if(i % 2 == 0){
        console.log(i + "even.")
    } else {
        console.log(i + "odd.")
    }
}



/*Create a for loop that uses console.log to create the output shown below.


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


var x = 1;
for (x < 10; x++);

var i = 1;
for i < 10; i++;

console.log(x + i);