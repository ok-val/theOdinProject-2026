## Keyboard event types

Here are the keyboard event types that are understood by the event listener:

| **Event**                 | **What specific user action triggers it?**                                                                | **Notes**                                                                                                                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **keydown**               | When the user **presses any key** (character or non‑character). Fires immediately when the key goes down. | • Fires **first** in the sequence.  <br>• **Repeats** while the key is held down.  <br>• Fires for **all keys**, including arrows, Shift, etc.                                                                                                    |
| **keypress** (deprecated) | When the user **presses a character‑producing key** (e.g., `a`, `1`, `?`).                                | • Fires **after keydown** and before keyup.  <br>• **Repeats** while the key is held down.  <br>• **Does NOT fire** for non‑character keys (e.g., arrows, Home, End).  <br>• Considered deprecated in modern specs, but still widely encountered. |
| **keyup**                 | When the user **releases a key** (character or non‑character).                                            | • Fires **last** in the sequence.  <br>• Fires **after the input value has updated** (important for reading text box contents).  <br>• Does not repeat.                                                                                           |

## Keyboard event properties

There are two important properties: `e.key` and `e.code`. For instance, when key a is pressed, the `key` property returns `a` while the `code` property returns `KeyA`. 

```js
let textBox = document.getElementById('message');

textBox.addEventListener('keydown', (e) => {
	console.log(`key=${event.key},code=${event.code}`);
})
```
