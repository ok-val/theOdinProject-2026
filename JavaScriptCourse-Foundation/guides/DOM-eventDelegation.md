If you have lots of similar **event types** (e.g., a lot of buttons that do something on click), **~={lavender}consider creating one function to nest all the event handlers using a switch statement=~**.

* It increases performance;
* More readable.

Creating a lot of functions *create bottleneck* at the interpreter where the objects are created by the interpreter. I can circumvent this using one function with switch statements.

Given a menu with a list:

```html
<ul id="menu">
    <li><a id="home">home</a></li>
    <li><a id="dashboard">Dashboard</a></li>
    <li><a id="report">report</a></li>
</ul>
```

So instead of: 

```js
let home = document.querySelector('#home');
home.addEventListener('click',(event) => {
    console.log('Home menu item was clicked');
});

let dashboard = document.querySelector('#dashboard');
dashboard.addEventListener('click',(event) => {
    console.log('Dashboard menu item was clicked');
});

let report = document.querySelector('#report');
report.addEventListener('click',(event) => {
    console.log('Report menu item was clicked');
});
```

I could do instead:

```js
const menu = document.querySelector("#menu");

menu.addEventListener('click', (e) => {
	switch (e.target.id) {
		case "home": console.log('Home menu item was clicked');
		case "dashboard": console.log('Dashboard menu item was clicked');
		case "report": console.log('Report menu item was clicked');
	};
});
```

