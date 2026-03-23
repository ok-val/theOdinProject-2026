## Creating a custom event using the CustomEvent() object constructor 

```js
let customEvent = new CustomEvent(type, {option})
```

The `customEvent()` object constructor takes two parameters, similar to the `Event()` constructor ([[event-dispatchEvent]]):

* **type:** is the string that represent the type of the event; be meaningful with this naming --- make it consistent with other available interactions
* **object:** is an object that takes the detail property that would contain any custom information as nested objects.

For instance, let's create a new event named markEvent, typed 'mark':

```js
let markEvent = new CustomEvent('mark', {
	detail: {background: 'yellow'},
});
```


Given a function that call back other functions:

```js
function applyStyles(elem, ...callbacks) {
	for (const cb of callbacks) {
		if (cb && typeof cb === 'function') {
			callback(elem);
		};
	}
}

function addBorder(elem) {
	elem.style.border = '1px solid blue';
}

function addYellowBg(elem) {
	elem.style.background = 'yellow';
} 

applyStyles(elem, addBorder, addYelowBg);
```

