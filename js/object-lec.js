
//What's going on with these objects?
//Well: an OBJECT is a grouping of data + functionality
//Our data. . we call properties [in a 'key:value' pair]
//Our functions . . we call methods.

//Let's set up an object and .log it to see what we're looking at:

var myCounty = {
    name: "Bexar", //name: key ; value: "Bexar"
    countySeat: "San Antonio",
    currentPop: 2003554
}

var myDog = {
    name: "Fenix",
    age: 11,
    breed: "Pembroke Welsh Corgi"
}

console.log(myCounty);

console.log(myDog);

//.log-ing the above gets us the object 'printed' or 'viewed' in the console where we can click into the object to see its shape [properties]

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
* New Object Instance vs. Object Literal Notation *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/


// We can call the 'constructor' for an object and use it to create our objects:

var myObject = new Object();

console.log(myObject);

//More often, we'll use this object literal notation structure as shown above and below:

var myObject = {};

console.log(typeof myObject);

//* TODO: Create a new Object and call it 'myCar' using either way to do so shown above (object instance or object literal)


var mycar = {};

console.log(mycar);


// That's great! But our car object doesn't have much going on, does it? There's no depth or meat to it - how can we fill our object in?

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                   Properties                    *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We assign properties to objects - properties are pieces of data and fill in the guts
// / details of our object

//Let's take myCar. . and actually line out what my car is.

// We can use dot notation to do so:

// myCar.make = "Chevrolet";
mycar.make = "Ford";
console.log(mycar);

// Or array notation:

// myCar["model"] = "Silverado";


//In general, dot notation is preferred of the two notations

//We can also set up our objects and properties during object creation
// var sigotherCar = {
//     make: "Honda",
//     model: "Fit",
//     year: 2010
// }

var sigOtherCar = {
    make: "Tesla",
    Model: "Model 3",
    year: 2018
}

console.log(sigOtherCar);

// TODO: Fill in your myCar object with properties of make,
//  model, and year with the correct values. If you don't own a vehicle,
//  fill in the details with your favorite vehicle.

var mycar = {
    Make: "Ford",
    Model: "Bronco",
    Year: 2021
}

console.log(mycar);



//For me? I'm missing the year for myCar so. .

// myCar.year = 2017;

//Now I have a completed example of the myCar object - the model and make were added above in prior examples

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*           Object Properties && Methods          *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

alert("Hey, y'all! I own " + mycar.Make + " " + mycar.Model );

/**/
/**/
//With our myCar objects set up, let's start utilizing them and diving into them!
//We can use dot notation or array notation in similar ways to start accessing these properties
//Let's share some information about our cars :)

// console.log("Hey, y'all! I own a " + myCar["make"] + " " + myCar.model) //Should concat from these two properties into this structure like we've been used to doing with variables

//Speaking of variables, we can tap into our prior understanding of assigning variables thus far and assign a property to a variable:

// var myCarYear = myCar.year;

// console.log("Woops - forgot to tell you what year my vehicle is, it's model year " + myCarYear)

//What if we wanted to create a more complicated piece of data? Perhaps a list of our cars FEATURES?

// myCar.features = ["Heated/ventilated seats", "leather", "towing package", "bed liner"]


//Now we could do something like this. . a list of those features in the console
// for (let i = 0; i < myCar.features.length; i++){
//     console.log("Here's one of my car's features: " + myCar.features[i])
// }

// TODO: Add an array of features that your vehicle has!

mycar.features = ["heated seats", "rear camera", "towing package"]
console.log(mycar);

//What about who owns our car? That could be an object itself if we think it through - the owner has a firstName and a lastName at the very least, right?
//Let's try nesting this object inside of our car object we've been building out

// var carOwner = {firstName: "Kenneth", lastName: "Howell"}


for(var i = 0; i < mycar.features.length; i++){
    console.log("Here's one of my car's features: " + mycar.features[i])
}

mycar.carOwner = {
    firstName : "Timothy",
    lastName : "Lefkowitz"
}

console.log(mycar);



// TODO: Nest a 'carOwner' object of your own into this growing myCar object and console.log the results!

mycar.turnOn = function(){
    alert("Putting the key in the ignition and fired up the " + mycar.Make + " " + mycar.Model + " just fine!")
}



//An object can also contain within itself a method (function). We can set it up similarly to our properties, but with a value that is the function expression

// myCar.turnOn = function () {
//     alert("Putting the key in the ignition - fired up the " + myCar.make + " " + myCar.model + " just fine!")
// }



/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                 Arrays of Objects               *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//Let's tie some things together: Let's make a garage with another car!

sigotherCar = {
    make: "Honda",
    model: "Fit",
    year: 2010,
    owner: {
        firstName: "Au.",
        lastName: "Ga."
    },
    // turnOn: function () {
    //     alert("Putting the key in the ignition - fired up the " + this.make + " " + this.model + " just fine!")
    // }
}

myExotic = {
    make: "Ferrari",
    model: "f360",
    year: 2001,
    owner: {
        firstname: "Tim",
        lastname: "lef"
    }
}

var theGarage = [
    mycar,
    sigotherCar,
    myExotic,
]

console.log(theGarage);

//Now: loop through an ARRAY of OBJECTS, accessing our turnOn function for our vehicles
//Also note: we used the keyword *this* on the other vehicle's turnOn function, so this will be a good experiment to see the results



//One final TODO: A bigger task - set up your own garage and add at least another vehicle into it. Log your garage array to verify it contains the cars you want - once your garage has the right cars, write a loop to access some properties or a method from them!

theGarage.forEach(function(car){
    car.turnOn();
})
