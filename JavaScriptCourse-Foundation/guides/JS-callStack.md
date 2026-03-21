Here's the [link](https://www.javascripttutorial.net/javascript-call-stack/) to this module.

## JS Call Stack

We have seen the call stack in action in [[DOM-debugging]]. Here is more context about how it works.

A *Call Stack* is a way for the ~={blue}JS engine=~ to:

1. Keep track of its place in code for calling functions. 
	+ It has info on *what function is being run* from which line within the code,
	+ and what functions are nested under *that function*. 

In essence, it tracks execution contexts. There are two types of execution context; each runs on a different cue, both following a Last-In-First-Out (LIFO) stacking principle:

1. **Global execution context** 
	1. Created when a script is loaded, 
	2. Stacked on top (or first position);
	3. Script runs;
2. **Function execution contexts**
	1. Created when a function is invoked (or called);
	2. Stacked on top (now on top of the global execution context);
	3. The function runs;
	4. Sub-function calls follow step 2.1–3, while stacking on top
3. **Function finishes**
	1. JS engine pops the context off the call stack and resumes with whatever is underneath (think horizontally);
4. **Call stack empty**
	1. The script stops running

Refer to the file [[\sandbox\js-Functions\jsCallStack.html]] (Open in VSCode)

```js
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);
```

Given this script, here's how the call stack changes throughout execution runtime.

![[Pasted image 20260310222323.png]]
