# Do not mutate states

**State is a crucial part of building applications.** Infringing any of
these rules may cause bugs.

> > > Rule 1: Use existing values

Never put values in state that can be calculated using existing values,
states, and/or props.

> > > Rule 2: Never mutate states

Treat the functional component like pure function. Let there be no
states.

When I need to change a value in an object (or arrays), copy the object
with the changes. Below is how to copy the existing object into a new
object while updating its property.

```jsx
const [person, setPerson] = useState({ name: 'John', age: 100 });
// BAD - Don't do this!
const handleIncreaseAge = () => {
  // mutating the current state object
  person.age = person.age + 1;
  setPerson(person);
};

// GOOD - Do this!
const handleIncreaseAge = () => {
  // copy the existing person object into a new object
  // while updating the age property
  const newPerson = { ...person, age: person.age + 1 };
  setPerson(newPerson);
};
```

> [!important] If we don't provide a new object to `setState`, it is not
> guaranteed to re-render the page. This is because `setState` uses
> `Object.is()` to determine of the previous state is the same. Thus,
> providing a new object is always better.
