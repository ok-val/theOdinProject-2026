## Methods

There are three primary methods:

1. Specify the function directly in HTML

```html
<button onclick="alert('Hello World')">Click me</button>
```

2. Set property to an existing element, achieving the same purpose as above

```html
<button id="btn">Click me</button>
<script>
	const button = document.querySelector("#btn");
	button.onclick = () => alert('Hello World');
```

3. **Best practice:** Attach even listeners to the Dom nodes in the script (i.e., don't do it inline style) 

```js
const button = document.querySelector("#btn");

button.addEventListener("click", () => {alert("Hello World");})
```

**Note:** The 2nd argument of `addEventListener()` is an **event handler** --- the function (or group of functions) that is called when event is triggered to the function.

It has to be added without the function activation `()`. Adding an activated functions will trigger the functions on first run. This doesn't achieve the intended effect.


### Event object (e)

```js
btn.addEventListener("click", function (e) {
  console.log(e);
});
```

The `e` parameter included in every callback function is an **Event object**. This object can only be accessed *inside* an event listener. 

Within this object, I get access to many useful properties and methods. Like the `e.target` property references the object itself, which can be manipulate itself.

```js
btn.addEventListener("click", function (e) {
  e.target.style.background = 'blue';
});
```

Here are some most commonly used properties and methods of the event object:

| Property / Method | Description                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| bubbles           | true if the event bubbles                                                                                       |
| cancelable        | true if the default behavior of the event can be canceled                                                       |
| currentTarget     | the current element on which the event is firing                                                                |
| defaultPrevented  | return true if the preventDefault() has been called.                                                            |
| detail            | more information about the event                                                                                |
| eventPhase        | 1 for capturing phase, 2 for target, 3 for bubbling                                                             |
| preventDefault()  | cancel the default behavior for the event. This method is only effective if the `cancelable` property is true   |
| stopPropagation() | cancel any further event capturing or bubbling. This method only can be used if the `bubbles` property is true. |
| target            | the target element of the event                                                                                 |
| type              | the type of event that was fired                                                                                |

### Event flow

The Event object flows through two opposite direction in the DOM: Bubbling (most-to-least) and Capturing (least-to-most). There are three phases of the event flow:

1. **Capturing phase:** The event moves down the DOM tree to reach target
2. **Target phase:** The event reaches the target element; here the event target is handled
3. **Bubbling phase:** The event moves back up the DOM tree to return a functions called in the event handler

#### Event bubbling

When a click is done, the *event object goes up the DOM tree* until it reaches the least specific element (document or even window). This is the flow from most to least specific.

![[Pasted image 20260321192136.png]]


#### Event capturing

The flow goes down the DOM tree --- from least to most specific.

![[Pasted image 20260321192231.png]]


### Manipulating event flow

There are two main ways of working with event flows: You can either stop them or prevent their default behavior.

* Use `event.preventDefault()` to prevent the default behavior of an event;
* Use `event.stopPropagation()` to stop the event from bubbling up the DOM tree (thus from propagating to parent elements), but does not cancel other default behaviors.

