/*global fetch*/
"use strict";
(function(){
    
    function $(id){ return document.getElementById(id) }
    function qs(selector){ return document.querySelector(selector) }
    function qsa(selector){ return document.querySelectorAll(selector) }
    
    window.onload = function(){
        $("apodbtn").onclick = getAjaxData;

    };

    //include this code, based on: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
    function checkStatus(response) { 
        if (response.status >= 200 && response.status < 300 || response.status == 0) {  
            return response.text();
        } else {  
            return Promise.reject(new Error(response.status+": "+response.statusText)); 
        } 
    }
     
    // event handler for clicking the ajax button   
    function getAjaxData(){
        //get api key here: https://api.nasa.gov
        let url = "https://api.nasa.gov/planetary/apod?api_key=YvKylVBsbxwoC17TqiiGIDeiLI8ghSqSwUm5lsBb";
        
        // dispaly loading text and disable button while ajax call is loading
        $("response").innerHTML = "Loading...";
        $("apodbtn").disabled = true;
        
        //start ajax call
        fetch(url) // can't include credentials for the github api, some ajax calls may need {mode: 'cors'}
           .then(checkStatus)
           .then(JSON.parse) // parse the json so the next "then" gets a JSON object
           .then(processApodJson)
           .catch(function(error) {
               // ajax call failed! alert, place text and re-enable the button
               $("response").innerHTML = "THERE WAS AN ERROR!";
               alert(error);
               $("apodbtn").disabled = false;
           });
    }
    
    function processApodJson(apodJson){
        //clear response box
        $("response").innerHTML = "";
        
        //See sample json response below
        let title = document.createElement("h2");
        title.innerHTML = apodJson.title;
        
        let image = document.createElement("img");
        image.src = apodJson.url;
        
        let explanation = document.createElement("p");
        explanation.innerHTML = apodJson.explanation;
        
        $("response").appendChild(title);
        $("response").appendChild(image);
        $("response").appendChild(explanation);
        
        //re-enable button
        $("apodbtn").disabled = false;
    }
    
    
})();

//SAMPLE APOD JSON RESPONSE
// {
//   "date": "2017-10-25", 
//   "explanation": "Could humans live beneath the surface of the Moon? This ...", 
//   "hdurl": "https://apod.nasa.gov/apod/image/1710/MariusHills_LO2LRO_1673.jpg", 
//   "media_type": "image", 
//   "service_version": "v1", 
//   "title": "Marius Hills and a Hole in the Moon", 
//   "url": "https://apod.nasa.gov/apod/image/1710/MariusHills_LO2LRO_1080.jpg"
// }

// From url: https://api.nasa.gov/planetary/apod?api_key=YvKylVBsbxwoC17TqiiGIDeiLI8ghSqSwUm5lsBb
// get your own key from: https://api.nasa.gov
