Generally, events are fired by user actions via mouse or keyboard. 
But it can also be generated from code.

In order to do this, we need to know the following recipe:

* First, create a new Event object using Event object constructor
* Then, trigger the event programmatically using `element.dispatchEvent()` method

## Event object constructor

`Event` is a based type; within which there are more specific types such as `MouseEvent`, `TouchEvent`, `FocusEvent`, `KeyboardEvent`, and `CustomEvent` ([[event-customEvent]]). This guide focuses on the most basic.

```js
let event = new Event(type, [,options]);
```

The event object constructor takes two parameters: 

* **type:** is a string that specifies the event type such as `click` or `mousedown` (see [[DOM-eventMouse]])
* **options:** is an object that accepts two optional properties (both false by default)
	* **bubbles:** is a boolean for whether the event flow up the DOM tree or not
	* **cancelable:** boolean for whether the event can be cancelled 
	* There can be more options depending on the type of event I use

## Example

Say you have button:

```html
<button id="btn">Click</click> 
```

I would register an event handler for that button:

```js
const button = document.querySelector("#btn");

button.addEventListener('click', () => {
	console.log('Button was clicked');
});
```

I could now create a new event that would do the click for me:

```js
let autoClick = new Event('click');
```

And automate that click:

```js
button.dispatchEvent(autoClick);
// when this script runs the button will clicked on; all event handlers will be called
```

