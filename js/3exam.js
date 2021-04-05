


// Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.

//
// totalPets([{name: 'Fernando Mendoza', numPets: 1},{name: 'Douglas Hirsh', numPets: 8}, {name: 'Kenneth Howell', numPets: 3}]) //11


var petsArray = [{
    name: "Fernando Mendoza",
    numPets: 1
},{
    name: "Douglas Hirsh",
    numPets: 8
},{
    name: "Kenneth Howell",
    numPets: 3
}];

petsArray.forEach(function(pets){
    console.log(pets.numPets);
})


/*
our gameplan:
    * write the function first
* one parameter
* deal with the array
** extract what we need (RV) AND we probably need a LOOP [FD]
*** need a loop? that's what a for loop is FOR!
    *** extraction: extract each individual numPets in this loop
** how about a BUCKET [a place to store our running sum]
our function:
 */


function totalPets(petsArray){

    var sum = 0;
    for(var i = 0; i < petsArray.length; i++){
        sum = sum + petsArray[i].numPets;
        console.log("var 'sum' is currently " + sum) //uncomment if you want to track the running total of sum
    }
    return sum;
}
console.log(totalPets(petsArray));


// Write a function named countPosi that accepts an array of numbers and returns the number of positive numbers in the array.


function countPosi(arrayofnums){
    var pos = countPosi()
}

countPosi([-2, 7, 4, -9, 1]) //3
countPosi([3, 6, 9, -1]) //3
countPosi([10]) //1


// // Write a function named printRecipe that accepts a recipe object. A recipe object will have properties of title (a string), servings (a number), and ingredients (an array of strings). printRecipe will console.log each property in this format:
//     Example object:


    var caldoRecipe = {name: "Caldo con Pollo", servings: 4, ingredients: ["whole chicken", "carrots", "cabbage", "potatoes", "jalapeno", "cilantro", "salt", "pepper", "cumin", "onion powder", "garlic powder"]}

function convertAddressToObject(string) {
    return {streetNumber: parseInt(string), streetName: string.slice(string.indexOf(" ") + 1)};
}


// Expected look in console from running printRecipe(caldoRecipe):
// Caldo con Pollo
// Serves: 4
// Required ingredients: whole chicken, carrots, cabbage, potatoes, jalapeno, cilantro, salt, pepper, cumin, onion powder, garlic powder
// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
// convertAddressToObject('8626 Sunny Oaks') // {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') // {streetNumber: '5408', streetName: 'Villa Nueva'}
