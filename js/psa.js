

/*
https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php


1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true

 */

function array(input) {
    if (Array.isArray(input) === true){
        return true;
    } else {
        return false;
    }
}




/*
2. Write a JavaScript function to clone an array. Go to the editor
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]

 */

function clone(){
    return clone.slice(0);
}


//
// function array_Clone(input) {
//     var arrayclone = input.slice(0);
//     return arrayclone;
// };

// function cloneArray(arra1){
//     return arra1.slice(0);
// }
// var array_Clone = cloneArray(arra1);

function cloneArray(arra1){
    var cloned = arra1.slice(0);
    return cloned;
}
var array_Clone = cloneArray(arra1);


//
// function arrayClone(input){
//     return input.slice(0);
// }


//
// function copyarray(input){
// numbers = [1, 2, 3, 4, 5];
// input = numbers.slice();
// // [1, 2, 3, 4, 5]
// }



    // numbers = [1, 2, 3];
    // numbersCopy = numbers.map((x) => x);
// arr2 = [...arr1];


/*
3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]

 */

var first = function(array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    if (n < 0)
        return [];
    return array.slice(0, n);
};




/*
4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]

 */

var last = function(array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
};



/*

5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"

 */

function join(input){
    return input.join();
}




/*
Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. Go to the editor
 */

const num = "";
const str = num.toString();
const result = [str[0]];

for(let x=1; x<str.length; x++){
    if((str[x-1]%2 === 0)&&(str[x]%2===0)){
        result.push('-',str[x]);
    } else {
        result.push(str[x]);
    }
}
console.log(result.join(''));

/*
7. Write a JavaScript program to sort the items of an array. Go to the editor
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8

 */

function sort(input){
    return input.sort();
}



/*
8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )

 */


var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
    for (var j=i; j<arr1.length; j++)
    {
        if (arr1[i] == arr1[j])
            m++;
        if (mf<m)
        {
            mf=m;
            item = arr1[i];
        }
    }
    m=0;
}
console.log(item+" ( " +mf +" times ) ") ;



/*
9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. Go to the editor

 */



/*
10. Write a JavaScript program which prints the elements of the following array. Go to the editor
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------
 */



/*
11. Write a JavaScript program to find the sum of squares of a numeric vector. Go to the editor
Click me to see the solution

 */

/*
12. Write a JavaScript program to compute the sum and product of an array of integers. Go to the editor
Click me to see the solution

 */


/*
13. Write a JavaScript program to add items in an blank array and display the items. Go to the editor

 */