/*
replace function
 */

function replace(input, input2, input3){
    if(typeof input === "string" && typeof input2 === "string" && typeof input4 === "string"){
        return input.replace(input2, input3)
    } else {
        return false;
    }
}

/*
is a number function
 */


/*
in between function
 */

function inBetween(num, num1, num2){
    var value = num;
    var low = num1;
    var high = num2;
    if(typeof value === "string" || typeof low === "string" || typeof high === "string"){
        return false;
    } else if (isANumber(num) && isANumber(num1) && isANumber(num2)){
        if(value < high && value > low){
            return true;
        }
    } else {
        return false;
    }
}