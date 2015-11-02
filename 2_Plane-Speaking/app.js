<<<<<<< HEAD
var xPlanes = {
  "X-1" : "VERY fast aircraft.",
  "X-3" : "Somewhat a dissapointment compared to expectations.",
  "X-15" : "First manned hypersonic aircraft.",
  "X-29" : "Forward-swept wing testbed.",
  "X-31" : "Thrust vectoring supermaneuverability testbed.",
  "X-37" : "Reusable orbital spaceplane.",
  "X-45" : "Unmanned combat air vehicle (UCAV) demonstrator.",
};


// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
var e = document.getElementById("planes-list") //This line is unfinished! Use a method to capture our <ul> element.

for(var xyz in xPlanes) {
  e.innerHTML += "<div><h2>" + xyz + "</h2>";
  e.innerHTML += "<p>" + xPlanes[xyz] + "</p></div>";
  e.innerHTML += "<img src='PlanePictures/" + xyz + ".jpg' style='width:304px;height:228px;'>";
=======
var xPlanes = [
  "X-1",
  "X-3",
  "X-15",
  "X-29",
  "X-31",
  "X-37",
  "X-45"
];

// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
var e = document. //This line is unfinished! Use a method to capture our <ul> element.

for(var i=0; i<xPlanes.length; i++) {
  var xPlane = xPlanes[i]; //What does "i" refer to?
  // Do some things to add <li> elements to our empty list.
>>>>>>> 1e4b38df0eb767b026167377ed0f60f62f78bded
}
