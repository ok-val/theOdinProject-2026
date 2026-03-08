The Console has 2 main uses: 

1. Viewing logged messages
2. Running JavaScript

## Viewing logged messages

This is like the `print()` command in python, but it's mostly used for making sure the nodes in the DOM is working as expected. 

## Running JS

We can also use console as a *Read-Eval-Print-Loop (REPL)* to modify contents in the nodes. We can manually select any node in the DOM tree (current selection indicated by `== $0`) or programmatically select nodes (`document.querySelector()`). See more in [[DOMDebugging]].

This is most helpful for trying out new features that may not be inherent in the existing script.