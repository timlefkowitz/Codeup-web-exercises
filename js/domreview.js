console.log("Hello there am i connected")

//TODO: When the #changeBoxSize button is clicked the box should double in size from what it was!

var changesizebutton = document.getElementById("changeBoxSize");


changesizebutton.addEventListener('click', function (e){
    console.log(e);
    var targetbox = document.getElementById("box");

    targetbox.style.height = "500px";
    targetbox.style.width = "500px";

})

//TODO: I have two CSS classes - toggleClass1 and toggleClass2 - that are currently unused. When the #toggleClass button is clicked, program a bit of JavaScript to toggle between those classes to see the background-color switch back and forth with each click. Bonus: Write your callback function in a variable and use it instead!

var toggleClassBtn = document.getElementById("toggleClass");

toggleClassBtn.addEventListener('click', function (e){
    var toggle1 = document.getElementsByClassName("toggleClass1");
    var toggle2 = document.getElementsByClassName("toggleClass2");
    var targetbox = document.getElementById("box");

    var toggle_1 = targetbox.setAttribute("class", "toggleClass1");
    var toggle_2 = targetbox = document.getElementById("box");


})




//TODO: In the #boxInfo element, when the BOX is hovered over the HEIGHT and WIDTH of the box would appear in that HTML area [div]



//TODO: When the user types in to our #input and then clicks #inputBtn, what they typed into the box should replace what was inside of the span #userName with the input's contents




//TODO: Refactor the above work - after 5 seconds have passed from the user clicking #inputBtn and seeing #userName change, change the entire div of #helloUser to say "Let me know if you want to play a game. ."
