import { getImageUrl } from './utils.js';

function Avatar({
  source,
  name,
  width = 70,
  height = 70,
  profession,
  awards,
  discovered
}) {
  const classNm = 'Avatar';
  return (
    <>
      <h2>{name}</h2>
      <img
        className={classNm}
        src={getImageUrl(source)}
        alt={name}
        width={width}
        height={height}
      />
      <ul>
        <li>
          <b>Profession:</b> {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b> ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered:</b> {discovered}
        </li>
      </ul>
    </>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <Avatar
          source="szV5sdG"
          name="Maria Skłodowska-Curie"
          profession="physicist and chemist"
          awards={[
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal'
          ]}
          discovered="polonium (chemical element)"
        />
      </section>
      <section className="profile">
        <Avatar
          source="YfeOqp2"
          alt="Katsuko Saruhashi"
          profession="geochemist"
          awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
          discovered="a method for measuring carbon dioxide in seawater"
        />
      </section>
    </div>
  );
}
