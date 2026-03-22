Mouse events are fired when you use a mouse to interact with the page. 
Here are 10 mouse ~={blue}**event types**=~:

| Event          | What specific user action triggers it?                             | Notes                                                                                  |
| -------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| **mousedown**  | Pressing a mouse button down while the pointer is over the element | Fires immediately on button press                                                      |
| **mouseup**    | Releasing a mouse button while the pointer is over the element     | Fires immediately on release                                                           |
| **click**      | A full press‑and‑release (mousedown → mouseup) on the same element | Does **not** fire if press and release happen on different elements                    |
| **dblclick**   | Two complete click actions in quick succession on the same element | Internally fires: mousedown → mouseup → click → mousedown → mouseup → click → dblclick |
| **mousemove**  | Moving the pointer over the element                                | Fires continuously, many times per second                                              |
| **mouseover**  | Pointer enters the element **or any of its children**              | Bubbles                                                                                |
| **mouseout**   | Pointer leaves the element **or any of its children**              | Bubbles                                                                                |
| **mouseenter** | Pointer enters the element **itself only**                         | Does **not** bubble                                                                    |
| **mouseleave** | Pointer leaves the element **itself only**                         | Does **not** bubble                                                                    |
| **wheel**      | Scrolling the mouse wheel or touchpad while over the element       | Returns value of `e.deltaY`                                                            |

You would register these events like so: 
**To register a mouse-click event handler to a button**:

```js
// Select the button
const button = document.querySelector('#btn');

// Add an event listener with an event type and event handler
button.addEventListener('click', () => console.log('Yeepie'));

```

## Detecting mouse buttons

To register a mouse-button event handler to a button, I can access the property `e.button`. Like so:

```js
const btn = document.querySelector('#btn');

// optional, but I can disable default right click default 'contextmenu' popup:
btn.addEventListener('contextmenu', (e) => {
	e.preventDefault(); // i.e., for contextmenu, prevent that default
});

// log the mouse event message, there are usually 3 cases:
btn.addEventListener('mouseup', (e) => {
	switch (e.button) {
	    case 0: console.log('LMB'); break;
	    case 1: console.log('MMB'); break;
	    case 2: console.log('RMB'); break;
	    default: console.log('Not identified');
	}
});
```

## Logging modifier keys

Modifier keys includes `shift`, `ctrl`, `alt`, and `meta` (window or mac icon key).
These can be detected as `true` or `false` value in these following properties:

* `e.shiftKey` = true | false;
* `e.altKey` = true | false;
* `e.ctrlKey` = true | false;
* `e.metaKey` = true | false;

```js
btn.addEventListener('click', (e) => {
	let keys = [];

	if (e.shiftKey) keys.push('shift');
	if (e.altKey) keys.push('alt');
	if (e.ctrlKey) keys.push('ctrl');
	if (e.metaKey) keys.push('meta');

	console.log(keys.join('+'));
});
```

## Getting screen coords

The key properties are:

* `e.screenX` = Number(); 
* `e.screenY` = Number();
* `e.clientX` = Number();
* `e.clientY` = Number();

This demo uses a 'trackpad':

```html
<div id="track-pad"></div>
<p id="location-log"></p> 
```

```js
let trackPad - document. querySelector('#track-pad');
trackPad.addEventListener('mousemove', (e) => {
    // remember this pattern: whenever I want to dynamically update an element, let it be selected INSIDE the event listener that manipulate it.
    let locationLog = document.querySelector('#location-log');
    locationLog.innerText = `Screen X/Y: (${e.screenX}, ${e.screenY})
    Client X/Y: (${e.clientX}, ${e.clientY})`
});
```

