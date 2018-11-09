# Website Organizaiton:
 * Content and Structure: HTML
 * Style: CSS
* Behavior: JavaScript
# HTML

## W3C HTML Validator
    <p>
    <a href="http://validator.w3.org">
        <img src="http://webster.cs.washington.edu/w3c-html.png" alt="Validate">
    </a>
    </p>    


# Cascading Style Sheets
It's called Cascading Style Sheets because the properties of an element cascade together in this order:  
    1.  Browser's default styles(reference)  
    2.  External style sheets (in a `<link>` tag)  
    3.  Internal style sheets (in a `<style>` tag in the page header)  
    4.  inline style (the `style` attribute of an HTML element)
## W3C CSS Validator
    ```
    <p>
    <a target="_blank" href="http://jigsaw.w3.org/css-validator/">
        <img src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
    </p>   
    ```

# JavaScript

## JavaScript "strict" mode
    "use strict";

    ... code ...

## JS Skeleton
    //HTML
    <!-- in the <head> block --> 
    <script src="path/to/javascript/file.js" type="text/javascrpt"></script>

    //JS
    (function() {

    // set-up code that doesn't involve the DOM 
    //   (e.g. setting up initial values, arrays, etc.)

    window.onload = function() {
        // phew! your code goes here
    };

    //function definitions go here

    })();

# Ajax
## Ajax Code Skeleton
    //include this code, based on: //https://developers.google.com/web/updates/2015/03/introduction-to-fetch
    function checkStatus(response) {  
        if (response.status >= 200 && response.status < 300) {  
            return response.text();
        } else {  
            return Promise.reject(new Error(response.status+": "+response.statusText)); 
        } 
    }
        
    function callAjax(){
        let url = ..... // put url string here
        fetch(url, {credentials: 'include'}) // include credentials for cloud9
        .then(checkStatus)
        .then(function(responseText) {
                //success: do something with the responseText
            })
        .catch(function(error) {
            //error: do something with error
        });
    }
## Ajax Code Skeletion(slight variation)
    function checkStatus(response) {   
    ...
    }
        
    function callAjax(){
        let url = ..... // put url string here
        fetch(url, {credentials: 'include'}) // include credentials for cloud9
        .then(checkStatus)
        .then(handleResponse)
        .catch(handleError);
    }

    function handleResponse(responseText){
        //success: do something with the responseText
    }

    function handleError(error){
        //error: do something with error
    }
## Ajax Code Skeleton for JSON
    //include this code, based on: //https://developers.google.com/web/updates/2015/03/introduction-to-fetch
    function checkStatus(response) {  
        if (response.status >= 200 && response.status < 300) {  
            return response.text();
        } else {  
            return Promise.reject(new Error(response.status+": "+response.statusText)); 
        } 
    }
        
    function callAjax(){
        let url = ..... // put url string here
        fetch(url, {credentials: 'include'}) // include credentials for cloud9
        .then(checkStatus)
        .then(function(responseJSON) {
                //success: do something with the responseJSON
            })
        .catch(function(error) {
            //error: do something with error
        });
    }

