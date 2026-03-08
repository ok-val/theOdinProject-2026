
The full tutorial is [here](https://javascript.info/debugging-chrome).

## HTML vs DOM

- An ~={yellow}HTML doc=~ provides *static* structure for the elements on the page. 
- The ~={yellow}browser=~ parses the HTML, producing *a tree of objects where each object is a node,* which can be *dynamically accessed* via JS. 
- **This tree of node-based objects is called a DOM (or Document Object Model).**

> [!note] Distinction
> HTML represents the static, initial page content, while the DOM represents the dynamic, scripted page content. Think of HTML as the structural schema of elements, and DOM as the interactive schema of the elements.
> 
> When JS touches these nodes from the HTML structure, it changes the contents and structure, differentiating the DOM from the initial HTML. 


## Element panel

Press `Ctrl + Shift + C` to open the *element panel*. 
We can see the *DOM tree*, highlighting the corresponding nodes on the page to the DOM tree's elements (which can be turned on or off).

### Inspecting current node with Console

When selecting a DOM node, we can see the current selection is highlighted AND appended with `== $0` at the end of the line.

Press `Esc` to open the Console and use the following commands to inspect:

* `$0` to view the selected node's property in *HTML format*
* `$0.textContent` to modify the node's text content
* `dir($0)` to view the node in *Object format*


## The Source panel

Access the Source panel to view and edit the source files.  

1. The file structure is shown in the *File navigator*. 
2. Edit the source code in the *Code editor* or the *DOM tree*. 
3. Press `Esc` to access the *Console* bottom panel.
4. Add breakpoints in the code editor.
5. Alternatively, breakpoints can be triggered by the command `debugger;` (js) in the source code.
6. Keep track of breakpoints, threads, and callstack, shown in the *Debugging pane*. 

## Tracking execution

To navigate the debugging more effectively, here are some helpful *tracing features*:

| Action               | Shortcut                   | What It Does                                                             | Nuances / Quirks                                                                                    |
| -------------------- | -------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| **Resume**           | F8                         | Continues execution until the next breakpoint or the end of the script.  | No intermediate pauses unless another breakpoint is hit.                                            |
| **Step**             | F9                         | Moves to the next line _without_ executing the current one.              | Useful for scanning code structure without running it.                                              |
| **Step Over**        | F10                        | Executes the current line and pauses at the next line in the same scope. | Does **not** step into built‑in functions (e.g., `alert`), so the debugger won’t pause inside them. |
| **Step Into**        | F11                        | Enters the next function call, including async functions.                | If no function call exists on the line, behaves like **Step**.                                      |
| **Step Out**         | Shift+F11                  | Finishes the current function and pauses when returning to the caller.   | Ideal when you’ve stepped too deep and want to escape the current call frame.                       |
| **Continue to here** | Right click on chosen line | Continue the script until the chosen line                                | n/a                                                                                                 |
