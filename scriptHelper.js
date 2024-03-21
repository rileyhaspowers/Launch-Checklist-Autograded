// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }

function validateInput(testInput) {
   if(testInput === ""){
    return "Empty";
   } else if (testInput === true || testInput === false){
    return "Not a Number";
   } else if (isNaN(testInput)){
    return "Not a Number";
   } else{
    return "Is a Number";
   } }


 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let inputValidated = true;
    let h2 = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty"){
        alert("Pilot's name is required!");
        inputValidated = false;
    } else if (validateInput(pilot) === "Is a Number"){
        alert("Pilot's name cannot be a number.")
        inputValidated = false;
    } else{
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    }

    if (validateInput(copilot) === "Empty"){
        alert("Copilot's name is required!");
        inputValidated = false;
    } else if (validateInput(copilot) === "Is a Number"){
        alert("Copilot's name cannot be a number.")
        inputValidated = false;
    } else{
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    if (validateInput(fuelLevel) === "Empty"){
        alert("Fuel level is required!");
        inputValidated = false;
    } else if (validateInput(fuelLevel) === "Not a Number"){
        alert("Fuel level must be a number.")
        inputValidated = false;
    } else if (fuelLevel < 10000){
        fuelStatus.innerHTML = "Fuel level too low for launch";
        list.style = "visibility: visible";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = "red";
    }

    if (validateInput(cargoLevel) === "Empty"){
        alert("Cargo level is required!");
        inputValidated = false;
    } else if (validateInput(cargoLevel) === "Not a Number"){
        alert("Cargo level must be a number.")
        inputValidated = false;
    } else if (cargoLevel > 10000){
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        list.style = "visibility: visible";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = "red";
    }
    // when you need to change text on pilotStatus, you'll have to change the style to visible AND change the text with .innerHTML!
    // for ex: pilotStatus = document.getElementById("pilotstatus"), then pilotstatus.innerHTML, etc etc 

    // if (inputValidated){
    // remember that this function is called here to complete tasks -- the actual submission of the form happens in script.js
    //change text of launchStatus to green and display "Shuttle is ready for launch"
    // }

    
 }
 

 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;