# Cascading Style Sheets(CSS)
* ## `<link>`  
    ```
    <head>
    ...
    <link type="text/css" href="filename" rel="stylesheet" />
    ...
    </head>    
    ```
    CSS describes the appearance and layout of information on a web page (as opposed to HTML, which describes the content)

* ## Basic CSS Rule Syntax
    ```
    selector {
    property: value;
    property: value;
    ...
    property: value;
    }   
    ```
    ```
    p {
    color: red;
    font-family: sans-serif;
    }   
    ```
    A css file consists of one or more rules  
    A rule selector specifies HTML elements and applies style properties
    * A selector of `*` selects all elements

* ## CSS Properties:  
    **Colors**  
    **Fonts**  
    **text-align**: `left, right, center` or `justify`  
    **text-decoration**: `underline`, `overline`, `line through`, `blink` and `none`  
    **text-shadow**: `shadow` is specified as an X-offset, a Y-offset, or an optional color  
    **life-style-type**: lots of possible values  
    **Backgrounds**: `backgroud-****`  
       
    ...

* ## W3C CSS Validator
    ```
    <p>
    <a target="_blank" href="http://jigsaw.w3.org/css-validator/">
        <img src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
    </p>   
    ```

* ## CSS `pseudo-classes`
    ```
    a:link    { color: #FF0000; } /* unvisited link */
    a:visited { color: #00FF00; } /* visited link */
    a:hover   { color: #FF00FF; } /* mouse over link */
    ```

* ## `id` and `class`  
    ### `id`  
    Unique identifier for an element  
    Only allowed one `id` value per page  
    Each element can only have one `id`  
    ### class
    Non-unique grouping attribute to share with many elements  
    Many elements (evne of different types) can share the same `class`  
    Each element can have many different `class`es 
    ### Example
    ```
    <p id="product-12345" class="product">Puppy calendar</p>
    <p id="product-133337" class="product">Cat mug</p>v   
    ```
    Both paragraphs have the same class (`product`), but each has its own ID