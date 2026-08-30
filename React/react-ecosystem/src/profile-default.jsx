import { Link } from 'react-router';

const DefaultProfile = () => {
  return (
    <div>
      Check out these guys:
      <ul>
        <li>
          <Link to="spinach">Spinach</Link>
        </li>
        <li>
          <Link to="popeye">Popeye</Link>
        </li>
      </ul>
    </div>
  );
};

export default DefaultProfile;
