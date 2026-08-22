# Iterative rendering from list

## Rendering list elements in JSX

We want to create a list of JSX components:

```jsx
function ListItem({ animals }) {
  return animals.map((anim) => <li key={anim}>{anim}</li>);
}

export default function App() {
	const animals = ['Lion', 'Cat', 'Elephant', 'Monkey'];
	// 4. Have the list item generated offsite
	const animalsLi = animals.map(anim => <li key={anim}>{anim}</li>);
  return (
    <>
      <ul>
				// 1. Spec list inline
        <ListItem animals={['Lion', 'Cat', 'Elephant', 'Monkey']}></List>
				// 2. Use declared list
        <ListItem animals={animals}></List>
				// 3. Directly call JS function
				{animals.map(anim => <li key={anim}>{anim}</li>)}
				// 4. ... Then just insert from offsite
				{animalsLi}
      </ul>
    </>
  );
}
```

## Rendering a list with element with passing JSX

```jsx
function ListItems(props) {
  return <li>{prop.animal}</li>;
}

function UnorderedList(props) {
  return (
    <ul>
      {props.animals.map((anim) => (
        <ListItem key={anim} animal={anim}>
          {anim}
        </ListItem>
      ))}
    </ul>
  );
}

export default function App() {
  const animals = ['Lion', 'Cat', 'Elephant', 'Monkey'];
  return (
    <>
      <UnorderedList animals={animals} />
    </>
  );
}
```
