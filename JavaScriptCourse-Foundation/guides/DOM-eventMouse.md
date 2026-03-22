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

