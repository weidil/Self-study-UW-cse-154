# HTML
* `<head>` tag describes the page  
  `<body>` tag contains the page's content  
  `DOCTYPE` tag tells the browser to interpret out page's code as HTML5, the latest/greatest version of the language
  ```
  <!DOCTYPE html>
  <html>
    <head>
    info about the page
    </head>
    <body>
    page contents
    </body>
  </html>
  ```

* ## Page Title: 
  `<title>` placed within the `<head>` of the page.  
  Displayed in the web browser's title bar and when bookmarking the page, otherwise not visible to the user as page content  
  ```
  <title>
    chapter2: HTML Basics
  </title>
  ```

* ## Paragraph:
   `<p>` placed in the body of the page
  ```
  <p>
  ....
  </p>
  ```

* ## Headings:
  `<h1>,<h2>,<h3>,<h4>,<h5>,<h6>`  headings to separate major areas of page
  ```
  <h1> ...</h1>
  <h2> ...</h2>
  <h3> ...</h3>
  ```

* ## `<header>` and `<footer>`  
  `<header>`tags usually contain one or more <h1-6> elements, maybe a logo, and authorship information  
  `<footer>`tags might contain site map links, authorship information, copyright information, etc.  
  ```
  <header> more html elements </header>
  ...maybe some other stuff ...
  <footer> more html elemetns </footer>
  ```
  Note: not to be confused with the `<head>` tag, the `<header>` is designed to contain headings for a document  

* ## `<article>` and `<section>`  
  `<article>` tag is a standalone piece of content  
  `<section>` tag is a piece of content that does not make sense on it's own  
  ```
  <article>
    <h2>Whitaker's resume</h2>
  <section>
    <h3>Obejective:</h3>
  </section>
  <section>
    <h3>Experience:</h3>
  </section>
  <section>
    <h3>References:</h3>
  </section>
  </article>
  ```
* ## Horicontal rule:`<hr>`  
  a horizontal line to viusally separate sections of a page
  ```
  <p>First paragraph</p>
  <hr />
  <p>Second paragraph</p>
  <hr>
  <p>Third paragraph</p>
  ```
* ## Links:
  `<a>` links,or"anchors", to other pages(inline)
  ```
  <p>
    Search for it on <a href="http://www.google.com/">Google</a>!
  </p>
  ```
  Uses the `href` attribute to specify the destination URL  
    * Can be abosulte(to another web site) or relative (to another page on this site)  
    
    
  Anchors are inline elements; must be placed in a block element such as `<p>` or `<h1>`  
  
  
* ## Images:`<img>`
  ```
  <img src="img/koalafications.jpg" alt="Koalified koala">
  ```
  The `src` attribute specifies the image URL  
  HTML5 also requires an `alt` attribute describing the image, which improves accessibility for users who can't otherwise see it

  * More About Images
    ```
    <a href="http://en.wikipedia.org/wiki/Koala/">
      <img src="images/irrelephant.jpg" alt="Irrelephant elephant" 
        title="dumbo!" />
    </a>
    ```
    If placed in an `<a>` anchor tag, the image becomes a link

* ## Line Break: 
  `<br />` forces a line break in the middle of a block element
  ```
  <p>
    The woods are lovely, dark and deep, <br> 
    But I have promises to keep, <br>And miles 
    to go before I sleep, <br>And miles to go before
    I sleep.
  </p>
  ```
  Warning: Don't over-use `<br>` (guideline: >= 2 in a row is bad, better to not use any)

  `<br>` tags should not be used to separate paragraphs or used multiple times in a row to create spacing  
* ## Phrase elements: `<em>`, `<strong>`
  `<em>`: emphasized text
  `<strong>`: strongly emphasized text
  ```
  <p>
    HTML is <em>really</em>, <strong>REALLY</strong> fun!
  </p>
  ```
  
* ## Unordered List: `<ul>`, `<li>`
  `<ul>` represents a bulleted list of items
  `<li>` represents a single item within the list
  ```
  <ul>
    <li>No shoes</li>
    <li>No shirt</li>
    <li>No problem</li>
  </ul>
  ```
* ## Ordered List: `<ol>`
  `<ol>` represents a numbered list of items
  ```
  <p>RIAA business model:
    <ol>
      </p><li>Sue customers</li>
      <li>???</li>
      <li>Profit!</li>
    </ol>
  </p>
  ```
* ## Definition List: `<dl>`, `<dt>`, `<dd>`
  `<dl>` represents a list of definitions of terms
  `<dt>` represents each term, and `<dd>` its definition
  ```
  <dl>
    <dt>newbie</dt> 
    <dd>
      one who does not have 
      mad skills
    </dd>
    <dt>own</dt> 
    <dd>
      to soundly defeat (e.g. 
      I owned that newbie!)
    </dd>
    <dt>frag</dt> 
    <dd>
      a kill in a shooting game
    </dd>
  </dl>
  ```
* Quotations: `<blockquote>` a quotation
  ```
  <p>
    As Lincoln said in his famous Gettysburg Address:
  </p>
  <blockquote>
    <p>
      Fourscore and seven years ago, our fathers brought forth
      on this continent a new nation, conceived in liberty, and
      dedicated to the proposition that all men are created equal.
    </p>
  </blockquote>
  ```
  * Inline quotation: `<q>` a short quotation  
  `<p>Quoth the Raven, <q>Nevermore.</q></p>`  
  Using `<q>` allows us to apply CSS styles to quotations  
* ## Favorites icon ("favicon")  
  ` <link href="filename" type="MIME type" rel="shortcut icon" />` template  
  `<link href="yahoo.gif" type="image/gif" rel="shortcut icon" />` example  
  The `link` tag, placed in the `head` section, attaches another file to the page  
* ## Form Elements: `<input>`
  ```
  <!-- 'q' happens to be the name of Google's required paramter -->
  <input type="text" name="q" value="Colbert Report" />
  <input type="submit" value="Booyah!" />  
  ```
  * ### `<input>` text fields
    ```
    <input type="text" size="10" maxlength="8" /> NetID <br />
    <input type="password" size="16" /> Password
    <input type="submit" value="Log In!" />
    ```
* ## Form Elements: Text boxes: `<textarea>`
    ```
    <textarea rows="4" cols="20">
    Type your comments here.
    </textarea>
    ```
* ## **Document Object Model(DOM)**
  A set of JavaScript objeects that represent each element on the page   
  Each tag in a page corresponds to a JavaScript DOM object  
  JS code can talk to these objects to examine elements' state
    * e.g. see whether a box is checked

  State can be changed  
    * e.g. insert some new text into a `div`
  
  Styles can be changed
    * e.g. make a pragraph red
 
  









