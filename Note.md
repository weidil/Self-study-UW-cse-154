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


