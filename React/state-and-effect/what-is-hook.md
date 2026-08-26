# Hooks

> [!definition] What is a React hook?
>
> Hooks are functions that let you use React features.
> All hooks a recognizable by the `use*` prefix (e.g., `useState()`)

When calling a hook, two rules apply:

1. Hooks can only be called at the top level of a functional component
   Think of them as import modules declared at the top of the file.
2. Hooks cannot be called from inside loops or conditions
