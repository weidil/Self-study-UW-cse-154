# Layout
* ## Generic HTML tags: `span` and `div`
    These tags are for when no other more specific tag applies (like the English words "thing" and "stuff")
    ### Span
    A generic inline tag(like `<em>` or `<strong>`)
    ### Div
    A generic block tag(like `<header>`, `<article`, `<section`, `<p>`, etc)

* ## CSS Attribute: `width` and `height`
    Block and inline elements normally have the height of their content  
    Inline elements have the width of their content  
    Block elements have a width that stretches across the whole page
    * ### `width` and `height` Example
    ```
    //HTML
    <div class="block"></div>

    //CSS
    div.block {
    height: 200px;
    width: 200px;
    }
    ```

* ## The Box Model
    * ### `margin`
        (outside) space between different elements
    * ### `border`
        (optional visbile) line that separates elements
    * ### `padding`
        (inside) space between element content and border