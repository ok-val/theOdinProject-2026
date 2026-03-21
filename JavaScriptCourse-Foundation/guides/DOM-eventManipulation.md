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

**Note:** The second argument of `addEventListener()` adds a callback wrapper to the function; adding raw functions will trigger the functions on first run. This doesn't achieve the intended effect.

### Event object (e)

```js
btn.addEventListener("click", function (e) {
  console.log(e);
});
```

The `e` parameter included in every callback function is an **Event object**. 

Within this object, I get access to many useful properties and methods. Like the `e.target` property references the object itself, which can be manipulate itself.

```js
btn.addEventListener("click", function (e) {
  e.target.style.background = 'blue';
});
```


