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

## Timers: used to delay or set intervals for executing functions
* ### Setting a timer
    Both `setTimeout` and `setInterval` return an ID representing the timer
    * This ID be passed to `clearTimeout`/`Interval` later to stop the timer
* `setTimeout` Example
    ```
    //HTML
    <button id="clickme">Click me!</button>
    <span id="outputText"></span>

    //JS
    window.onload = function() {
    document.getElementById("clickme").onclick = delayedMessage;
    };

    function delayedMessage() {
    document.getElementById("outputText").innerHTML = "Wait for it...";
    setTimeout(sayBooyah, 5000);
    }

    function sayBooyah() { // called when the timer goes off
    document.getElementById("outputText").innerHTML = "BOOYAH!";
    }   
    ```
* `setInterval` Example
    ```
    let timer = null; // stores ID of interval timer
    function delayMsg2() { 
        timer = setInterval(mowgli, 1000);
    }

    function mowgli() {
    document.getElementById("outputText").innerHTML += "Mowgli!"
    }    
    ```
* `clearInterval` Example
    ```
    let timer = null; // stores ID of interval timer
    function toggleDelayMessage() { 
    if (timer === null) {
        timer = setInterval(mowgli, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }
    }

    function mowgli() {
    document.getElementById("outputText").innerHTML += "Mowgli!"
    }
    ```
## The `innerHTML` Property 
    //HTML
    <button onclick="addText();">Click me!</button>
    <span id="output">Hello </span>
    //JS
    function addText() {
    let span = document.getElementById("output");
    span.innerHTML += " ... goodbye";
    }
Can change the text inside most elements by setting the `innerHTML` property

## Mouse Event Example
    //HTML
    <pre id="target">Move the mouse over me!</pre>

    //JS
    window.onload = function() {
        let target = document.getElementById("target");
        target.onmousemove = target.mousedown = showCoords;
    };

    function showCoords(event) {
     document.getElementById("target").innerHTML =
        "screen : (" + event.screenX + ", " + event.screenY + ")\n"
        +  "client : (" + event.clientX + ", " + event.clientY + ")\n"
        +  "button : (" + event.button;    
## Key Event Example
    document.getElementById("textbox").onkeydown = textKeyDown;
    ...
    function textKeyDown(event) {
        let key = String.fromCharCode(event.keyCode);
        if (key == 's' && event.altKey) {
            alert("Save the document!");
            this.value = this.value.split("").join("-");
        }
    }
Each time you push down any key, even a modifier such as Alt or Ctrl, the `keydown` event fires

If you hold down the key, the `keydown` event fires repeatedly

`keypress` event is a bit flakier and inconsistent across browsers
* Some Useful Keycodes
  
    |Keyboard Key | Event Keycode |
    | ------ | ------ |
    |Backspace|	8|
    |Tab|	9|
    |Enter|	13|
    |Escape	|27|
    |Page Up, Page Down, End, Home	|33, 34, 35, 36|
    |Left, Up, Right, Down	|37, 38, 39, 40|
    |Insert, Delete|	45, 46|
    |Window/Command|	91|
    |F1-F12|	112-123|

## Stopping an Event, example
    //HTML
    <form id="exampleform" action="http://foo.com/foo.php">...</form>

    //JS
    window.onload = function() {
        let form = document.getElementById("exampleform");
        form.onsubmit = checkData;
    };

    function checkData(event) {
        if (document.getElement("state").length != 2) {
            alert("Error, invalid city/state."); // show error message
            event.preventDefault();
            return false; // stop form submission
        }
    }    