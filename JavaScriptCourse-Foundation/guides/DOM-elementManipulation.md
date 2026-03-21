## What is DOM?

The **DOM (Document Object Model)** is a representation of the contents of the webpage in a tree form. A basic example of the **tree of node** looks like the one below.

![[Pasted image 20260320211924.png]]
**When HTML is parsed by browser, it is converted to the DOM** (I think of this like how JS parser would parse the code into AST or Abstract Syntax Tree --- there has to be some schematic translation between interfaces, right?) 

**Thus, these nodes becomes JavaScript objects** that have many properties and methods attached so that JS can access them.

## Basic DOM methods

### Query selectors

* `element.querySelector(selector)` returns the first-matched result
* `element.querySelectorAll(selector)` returns a NodeList containing all found res
* `element.getElementById(selector)` returns found IDs only

**Note:** NodeList does not function like an array. To do so, use `Array.from()`.

### Create, append, and remove elements

* `element.createElement(tagName, [options])`, so I can add some optional parameters to the new element. Cool!
* `parentNode.appendChild(childNode)` appends childNode as the last child of the parentNode
* `parentNode.removeChild(childName)` removes childName from parentNode on the DOM and returns a reference to that removed child.  

### Altering elements

```js
// let's create a new element called div
const div = document.createElement('div');
// this creates a new div in the HTML which is immediately turned into a DOM-ready JS object 
```

```js
// You can discrete properties
div.style.color = 'orange';
div.style.background = 'skyblue';

// Or, you can address the entire inline style
div.setAttribute('style', 'color: orange; background: skyblue;');

```

**Note:** All kebab-cased CSS properties like background-color or font-family are transformed into camelCase in DOM-ready JS.

### Editing attributes

You can either set, get, or remove attributes of nodes:

```js
// assign attValue to atName attribute if that exists, else create one
div.setAttribute('attName', 'attValue');

// returns attValue
div.getAttribute('attName');

// remove specified attribute
div.removeAttribute('attName');
```


### Working with classes

```js
// add class 'newClass' to div
div.classList.add('newClass');

// removes 'newClass' from div
div.classList.remove('newClass');

// if div doesn't have toggleClass, add it, else remove it
div.classList.toggle('toggleClass');
```


## Example of DOM element manipulation

```html
<body>
	<h1>Ttitle</h1>
	<div id ="container"></div>
</body>
```

```js
// assign the DOM node to JS for parsing
const containerDiv = document.getElementById("container");

// WORKFLOW FOR ADDING STUFF
// 1. Create an element on the document level
const containerContent1 = document.createElement('div');

// 2. Assign class(es) to the attribute
containerContent1.classList.add('contentAppearance');

// 3. Assign content to the element
containerContent1.textContent('Content of container 1');

// 4. Structure the element in its intended place
containerDiv.appendChild(containerContent1);

```

After the script is run, the DOM tree should look like this:

```html
<body>
	<h1>Ttitle</h1>
	<div id ="container">
		<div class="contentAppearance">Content of container</div>
	</div>
</body>
```

## Running order of scripts

JS script may be embedded anywhere within the html code. Since it refers to the HTML elements that are create thus far, *any HTML that has not been parsed by the DOM will cause some running order error*. 

To avoid this, be intentional about where your script runs in regards to the running order of the HTML. Otherwise, I have to basic options:

1. Include the script at the end of the HTML, but this can be annoying for long HTMLs
2. Include the script in the HTML head using the `defer` option, achieving the same effect. 

```html
<head>
	<script scr="jsScript.js" defer>//or OG script goes here </script>
</head>
```

