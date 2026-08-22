function ListItem(props) {
  return <li>{props.animal}</li>;
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

export default function Zoo() {
  const animals = ['Lion', 'Cat', 'Elephant', 'Monkey'];
  return (
    <>
      <UnorderedList animals={animals} />
    </>
  );
}
