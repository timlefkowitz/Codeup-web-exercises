
// var num = 2;
//
// while (num <= 65536){
//     console.log(num);
//     num = num * 2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("You have " + allCones + " cones to sell")

do {
    var requestedCones =  Math.floor(Math.random() * 5) + 1;

    if (requestedCones <= allCones){
        // This means you can sell cones
        allCones = allCones - requestedCones;
        console.log("You sold " + requestedCones +", and have " + allCones + " cones left.");
    }else{
        //This means you dont have enough cones to sell
        console.log("Sorry I don't have " + requestedCones + " cones, I only have " + allCones + " cones left.");
    }
} while (allCones > 0 )

 console.log("Yahh, I sold all my cones for the day!!");