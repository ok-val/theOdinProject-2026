
> [!definition] Objects
> As opposed to primitives which contains only one thing, an object is a collection of key-value pairs, where every key stands for the property name of the object.

If we may recall from [[JSDatatypes]], there are eight data types. 
Objects is the only data type that is not primitive (e.g., containing only a single value).

```js
// To create object:
let object1 = new Object();

let object2 = {}
```

## Literals and properties

There are a few ways to **assign** key-value pairs for objects:
In general, consider using bracket notation *(returning computed)* for max robustness.

```js
// I can add key-value pairs during expression
let users = {
	name: 'Bolaji',
	age: 30,
}
```

```js
// I can also add key-value pairs after the initialization
let users = {};
users['name'] = 'Bolaji';
users['age'] = 30;
```

To **get** a value from its key:

```js
getVal = users.name;
getVal = users['name']; // prefer square bracket for robustness
```

To **delete** a key-value pair:

```js
delete users['age'];
```

### Pattern for user input property value

```js
let item = prompt('Item to add', 'Banana');
let qtn = prompt('How many to add', '5');

let cart = {};

cart[item] = [+qtn];
```



