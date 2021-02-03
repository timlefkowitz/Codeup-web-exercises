"use strick";
console.log("Hello from external Javascript");


//__________________//
/// Alert Message ////
//_________________//
alert("Welcome to my Website!");

/// Prompt
var favcolor = prompt("What is your favorite color?");
alert(favcolor + " is my favorite color too!");


////// Movie Rentals ///////
//            ___       ///
//           |o o|     ////
//            ---     ////
//////////////////////////

var Thelittlemermaid = parseInt(prompt("How many days have you had The Little Mermaid?"));
var BrotherBear = parseInt(prompt("How many days have you had BrotherBear?"));
var Hercules = parseInt(prompt("How many days have you had Hercules?"));

var PricePerDay = 3;
console.log(PricePerDay.toFixed(2));

var finalprice = (Thelittlemermaid + BrotherBear + Hercules) * PricePerDay;
alert("You pay " + finalprice + " NoW");




//////////////////////
/////  TECH PAY /////
////////////////////

var GooglePay = parseInt(prompt("How many hours did you work at Google this week?") * 400);
var AmazonPay = parseInt(prompt("How many hours did you work at Amazon this week?") * 380);
var FacebookPay = parseInt(prompt("How many hours did you work at Facebook this week?") * 350);

var paythisweek = GooglePay + AmazonPay + FacebookPay;
alert("Your pay this week should be $" + paythisweek);






//////  Is the class full? /////

var classIsFull = confirm("Is the class you are trying to join full?");

var hasScheduleConflicts = confirm("Do you have class at 2:30?");

alert("You can join the class is a " + (!classIsFull && hasScheduleConflicts) + " statement.");

// var isclassfull = false;
// var classSchedule = true;
// var HerSchedule = true;

// var ClassSituation = isclassfull || classSchedule || HerSchedule;
// console.log(ClassSituation);





////// Product Offer \\\\\

var hasMoreThanTwoItems = confirm("Do you have more than two items in your cart?");

var isOfferValid = confirm("Is the offer still valid?");

var PremiumMembers = confirm("Are you a premium member?");

var canUserUseOffer = (hasMoreThanTwoItems || PremiumMembers) && isOfferValid;

alert("You can use this offer is a " + canUserUseOffer + " statement.");


//
// var ProductOfferCurrent = true;
// var offer = -20;
// var Items = 3;
// var ItemMorethen2 = Items > 2;
// var PremiumMember = offer;
//
// var NotaMember = ProductOfferCurrent || ItemMorethen2;
// console.log(NotaMember);
//
