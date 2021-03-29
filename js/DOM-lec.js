// lets grab our LI's with the class of "hat-sold"

var topsellers = document.getElementsByClassName("hat-sold");

console.log(topsellers);

// those were last months top sellers :( Can we update these list items to say "hat TBD" and be strong about it
// (without ever touching the HMTL

for (var i = 0; i < topsellers.length; i++){
    topsellers[i].innerHTML = "<strong>Hat TBD</strong>"
}

// innerText vs innerHTML
// WOOPS - we got another call from the people upstairs. Can we change "Our Top Sellers" to be something that makes more sense

var bestSellerHeader = document.getElementById("best-seller");

console.log(bestSellerHeader)

bestSellerHeader.innerText = "Will update soon!"

//has attribute: let me know true or false if that attribute is located within the element

var bottomLink = document.getElementById("bottom-link")

bottomLink.hasAttribute('id');
bottomLink.hasAttribute('href');
bottomLink.hasAttribute('style');


//get attribute: let me know the value of the attribute

console.log(bottomLink.getAttribute('href'));
console.log(bottomLink.getAttribute('id'));


//setAttribute: let's change the attribute's value!

bottomLink.setAttribute("href", "https://duckduckgo.com")

var searchArea = document.getElementById("hat-search")

//Accessing and Modifying STYLE

var bodyElement = document.getElementsByTagName("body");

console.log(bodyElement);

bodyElement[0].style.color = "white"

bodyElement[0].style["background-color"] = "gray";
