# JavaScript
* some basics of the JS language:
    * JavaScript vs .Java comparisons
    * Syntax and types
    * Loops and functiongs
    * Events(basics) and form elements
## Linking to a JavaScript file: `<script>`
```
  //template
    <script src="filename"type="text/javascript"></script>

    // example
    <script src="example.js"type="text/javascript"></script>
```
The `script` tag should be placed in the `HTML` page's `head`  

Script code is stored in a separate `.js` file    

## First JS Statement: `alert`
```
alert("message");
```
A JS command that pops up a dialog box with a message  

## Event-Driven Programming
Unlike Java programs, JS programs have no `main`; they respond to user action called events 

**Evnet-Driven Progamming**: writing programs driven by user events

* Event Handlers
    ```
    //template
    <element attributes onclick="function();">...
    
    //example
    <div onclick="myFunction();">Click me!</div>
    ```
    JS functions can be set as **evnets handlers** 

    `onclick` is just one of many events `HTML` attributes  
* Buttons: `<button>`
    ```
    <button onclick="myFunction();">Click me!</button>
    ```
    Button's text appears inside tag; can also contain images  

    To make a responsive button or other UI control:  
     1. Choose the control(e.g. button) and event(e.g. mouse click) of interse
     2. Write a JavaScript function to run when the events occurs
     3. Attach the function to the event on the control
## Do with DOM objects
This is how give behavior to web pages: use JavaScript to manipulate the DOM by changing the properties of DOM elements
* Modifying DOM Elements(Example)
    ```
    //HTML
    <a id="fb-link" href="http://www.facebook.com">Facebook</a>
    
    //JS
    let link = document.getElementById("fb-link");
    link.innerHTML = "MySpace is back in a really big way."
     ``` 
# Unobtrusive JavaScript
Unobtrusive JavaScript code :  
* HTML with no JavaScript code inside the tags

* uses the JS DOM to attach and execute all JavaScript event handlers  

Allows separation of web site into 3 major categories:  
* content(HTML)- what is it?

* presentation(CSS)- how does it look? 

* behavior(JavaScript)- how does it respond to user interaction

## Obstrusive Event Handlers(bad)
    //HTML
    <button onclick="okayClick();">OK</button>

    //JS
    function okayClick() {
    alert("booyah");
    }
HTML is cluttered with JS code which is bad style

## Attaching an event handler in JavaScript code
    // JS(template)
    let objectName.onevent = function;

    //HTML
    <button id="ok">OK</button>

    //JS(example)
    function okayClick() {
    alert("booyah");
    }
    let okButton = document.getElementById("ok");
    okButton.onclick = okayClick;
It is legal to attach event handlers to elements' DOM objects in your JavaScript code 

**Notice that do not put parentheses after the function's name**  

This is better style than attaching them in the HTML  

## The `window.onload` event
    function functionName() {
     // put code to initialize the page here
     }

    // instruct window to run the function when the page has loaded:
    window.onload = functionName;
There is a global event called `window.onload` event that happens once everything in the page has been loaded

If a function as a handler for `window.onload`, it will run at that time
* ### An unobtrusive event handler
    ```
    // HTML
    <button id="ok">OK</button>   <!-- (1) -->
    // JS
    // called when page loads; sets up event handlers
    function pageLoad() {
    let ok = document.getElementById("ok"); // (3)   
    ok.onclick = okayClick;
    }
            
    function okayClick() {
    alert("booyah");                        // (4)
    }
            
    window.onload = pageLoad;                   // (2)
    ```
## Anonymous function example
    window.onload = function() {
    let ok = document.getElementById("ok");
    ok.onclick = okayClick;
    };

    function okayClick() {
    alert("booyah");
    }
the more concise
```
    window.onload = function() {
                document.getElementById("ok").onclick = function() {
                    alert("booyah");
                };
            };
```    
## The "module pattern"
    (function() {
        statements;
    }) ();
Wraps all of file's code in an anonymous function that is declared and immediately called  

0 global symbols will be introduced!  

The variables and functions defined by code canot be messed with externally  