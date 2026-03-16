**Clean code** is important because it allows us and other people to understand what's going on in at a later time. The code can be more easily debugged because one can better scan the code to find potential issues. 

**This is important because the majority of the time, we are going to be reading code.**

Here are a few tips for writing clean code in JS:

1. Use camelCase (although it's a little annoying to use because there's no delimiter)
2. A good function or var name is descriptive and easy to skim. Ask yourself:
	1. Is the name is easy to understand?
	2. Var names should be passive
	3. Function names should be active

## Indentation or Horizontal spacing

**Indentation provides horizontal spacing that parallels the logic of functions.**
For now, my golden rule is to avoid more than 3 indented blocks (still a slow code reader).

## Line break or Vertical spacing

**Line break provides vertical chunking of statements/assignments and declarations.**
Consider separating the statements/assignments and declarations. 

```js
function assignUsernameWithId(user, id) {
	const user = user;
	const userId = id;
	
	let userData = new Map();
	userData.set(user, userId);
	
	return userData;
}
```

Sure, this function is a little dumb, but the idea is there. 
We have *chunked the statements, function calls, and return in separate blocks*, making for more scannable code.

We have also *named the function with string that is as functional as a comment*. This is a good thing.


> [!NOTE] Linus's rule for clean code
> Refer to this from time to time: 
> https://www.youtube.com/watch?v=d6PG6xdoU4c&pp=ygURbGludXMncyBjbGVhbiBjb2Q%3D





