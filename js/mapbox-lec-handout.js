"use strict";
/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected


/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO: Set map to the San Antonio area using the coordinates [-98.4861, 29.4252]

mapboxgl.accessToken = mapboxtoken;

var mapOptions = {
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4861, 29.4252],
    zoom: 10,
}

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4861, 29.4252], //starting position
    zoom:9,
});

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the MapBox docs! (10 mins~)

var map = new mapboxgl.Map(mapOptions)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4861, 29.4260]. This marker will mark the Alamo on our map.






// TODO TOGETHER: Change the color of the marker

var marker = new mapboxgl.Marker({color:"#639"}).setLngLat([-98.4861, 29.4260]).addTo(map)


// TODO: Make a new marker! Let's experiment with the color and setting the LngLat [how about a marker for Codeup San Antone? -98.4895, 29.4267 Codeup Dallas? -96.8056, 32.7786]



// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!

var codeupmarker = new mapboxgl.Marker({color:"#4e5e34",draggable: true})
    .setLngLat([-98.4895, 29.4267])
    .addTo(map)




/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over San Antonio's Codeup. Set the html as a paragraph that says "Codeup Rocks!"

// var markerHeight = 50, markerRadius = 10, linearOffset = 25;
// var popupOffsets = {
//     'top': [0, 0],
//     'top-left': [0,0],
//     'top-right': [0,0],
//     'bottom': [0, -markerHeight],
//     'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
//     'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
//     'left': [markerRadius, (markerHeight - markerRadius) * -1],
//     'right': [-markerRadius, (markerHeight - markerRadius) * -1]
// };
// var popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
//     .setLngLat([-98.4895, 29.4267])
//     .setHTML("<p>CodeUp Rocks</p>")
//     .setMaxWidth("300px")
//     .addTo(map);

    //
    // marcoPopup.on('close', function (){
    //     console.log("popup was closed");
    // });
    //
    // marcoPopup.on('open', function (){
    //     console.log("popup was closed");
    // });



// TODO TOGETHER: We'll comment out the popup we just added. Next, let's add a popup to the Alamo marker!

var alamopopup = new mapboxgl.Popup().setLngLat([-98.4895, 29.4267]).setHTML("<h6>Remember the Alamo</h6>").addTo(map)

marker.setPopup(alamopopup)





// TODO: Review the popup docs. What are some additional options we can pass to the popup? Choose one and experiment with implementing that option to a popup!

var home = new mapboxgl.Popup().setLngLat([-98.4895, 29.4267]).setHTML("<h6>Here is home ET</h6>").addTo(map)

//.trackPointer() not sure what i would use it for

// TODO: Try setting the text of a popup by using ".setText()" instead of ".setHTML()" - what happens with HTML tags between the two?


var textchange = new mapboxgl.Popup().setLngLat([-96.4895, 28.4267]).setText("<h6>Here is home ET</h6>").addTo(map)


/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
// TODO TOGETHER: Let's set up our mapbox-geocoder-utils.js!
// We setup: a mapbox-geocoder-utils.js, hooked it up to our .html file, and console.logged to confirm hooking them up

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter

geocode("130 elmhurst ave, san antonio, tx", mapboxtoken).then(function(results){
    console.log(results);
    codeupmarker.setCenter(results); // results, right now are an array of coordinates - looks good!
})

//TODO: Using the geocode method above, add a marker at Codeup to the map

// geocode("130 elmhurst ave, san antonio, tx", mapboxToken).then(function(results){
//     new popup = new mapboxgl.Popup().setHTML("<h6>Thanks Geocode</h6>")
//
//     new mapboxgl.Marker().setLngLat(results).setupPop(popup).addTo(marker)
// });


//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the Alamo

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method
