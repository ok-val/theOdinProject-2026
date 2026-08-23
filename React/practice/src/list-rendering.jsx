import { people } from './data.js';
import { getImageUrl } from './utils.js';

function ListItems({ people }) {
  const list = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person.imageId)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{list}</ul>;
}

export default function List() {
  const chemists = people.filter((per) => per.profession === 'chemist');
  const others = people.filter((per) => per.profession !== 'chemist');
  return (
    <article>
      <h1>Chemists</h1>
      <ListItems people={chemists} />
      <h1>Others</h1>
      <ListItems people={others} />
    </article>
  );
}
