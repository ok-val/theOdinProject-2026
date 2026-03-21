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

