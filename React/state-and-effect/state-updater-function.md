# State updater function

Because `setState` is async-like (getting queued after its caller fn has
finished running, but all is happening in the standard call stack; see
[[state-rendering-is-async-like.md]]), objects passed into it will be
evaluated against the current state of the component.

This means that `setState` does not update components' props on the fly.
The updates will only become live in the next component render.

When a callback is triggered, React actually allows all internal fns to
finish running before any of the `setState` function will run. Those
internal fns actually do the triggering the renders, if any `setState`
is to be queued after the all the component internals has executed.

Consider the following code:

```jsx
const handleIncreaseAge = () => {
  setPerson({ ...person, age: person.age + 1 });
  console.log(person.age);
  setPerson({ ...person, age: person.age + 1 });
  console.log(person.age);
};
```

Again, in line with what I've learned about React rendering order, all
`setState` fns are batched and to be executed after the caller
`handleIncreaseAge` has finished running, leading `console.log` to
return stale values.

Source:
https://www.reddit.com/r/reactjs/comments/13u351q/usestate_async_or_sync/

And so the second `setState` would also be using the stale value,
leading to React just rendering the same value twice.

> Hey, replace the current render’s person with an increase in age by 1.
> Then, replace the current render’s person with an increase in age
> by 1.

## State updater functions (are highly recommended)

**But what if I want to update the state multiple times in one**
**rendering for some particular reason?**

I can use **state function updater**, a fancy phrase for passing
callback fns inside the `setState` function to create an enclosure for
every passing params, ensuring the procedural state update.

Only with the exception for creating a completely independent component
such as a user input that directly takes values, most components should
be using Updater Functions.

```jsx
const handleIncreaseAge = () => {
  setPerson((prevPerson) => ({
    ...prevPerson,
    age: prevPerson.age + 1
  }));
  setPerson((prevPerson) => ({
    ...prevPerson,
    age: prevPerson.age + 1
  }));
};
```
