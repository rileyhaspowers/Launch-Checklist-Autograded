// Write your JavaScript code here!
// call formSubmission in this document

const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let destination = pickPlanet(listedPlanetsResponse);
        let finalDestination = addDestinationInfo(destination);

        // Below this comment call the appropriate helper functions
        // to pick a planet fom the list of planets and add that information to your destination.
           // call addDesitination - which will utilize fetch
    })
    this.addEventListener("formSubmit???")
     // add eventListener for button
    // then, with button, grab the 4 inputs (pilot, copilot, etc)
    // finally, call  formSubmission - which scriptHelper has!
 });