console.log("Math Object Lecture");

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


//rounds the decimal high or low
console.log(Math.round(20.4));
console.log(Math.round(202.80));
console.log(Math.round(20.7));
console.log(Math.round(23.43));


//Math.ceil(x)
console.log("Math.ceil(20.0008)", Math.ceil(20.0008));


//Math.floor(x)
console.log('Math.floor(20.999999)', Math.floor(20.999999));

//Math.pow(x)
console.log("Math.pow(2, 16)", Math.pow(2, 16));

//Math.sqrt(x)
console.log("Math.sqrt(9)", Math.sqrt(9));