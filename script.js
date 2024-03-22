const { myFetch, pickPlanet, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let destination = pickPlanet(listedPlanetsResponse);
        addDestinationInfo(destination);
    })
    let form = document.querySelector("form");
    form.addEventListener("submit", formSubmission());
     // add eventListener for buttonthen, with button, grab the 4 inputs (pilot, copilot, etc)
    // finally, call  formSubmission - which scriptHelper has!
 });