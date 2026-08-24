# State updates behaves async-like (setState is decoupled in the stack)

Because state updates behaves asynchronously (but not actually), the
code in the functional component will execute first (in the standard
call stack) before the setter function returns the new components of the
new DOM.

```jsx
function Person() {
  const [person, setPerson] = useState({ name: 'John', age: 100 });

  const handleIncreaseAge = () => {
    console.log(
      'in handleIncreaseAge (before setPerson call): ',
      person
    );
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log(
      'in handleIncreaseAge (after setPerson call): ',
      person
    );
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log('during render: ', person);

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

// during render: age: 100 // initial render
// during render: age: 100 // trigger rerender
// (before setPerson call): age: 100 // handleIncreaseAge() runs
// (after setPerson call): age: 100 // handledIncreaseAge() finishes
```

Given the functional component above, the `after setPerson call` returns
the stale value of `age: 100`. This is because `setPerson` is handed off
to some React packages that executes it AFTER the caller function has
finished executing in the stack.

Meaning that `setPerson` doesn't get nested in the `handIncreaseAge()`
stack.
