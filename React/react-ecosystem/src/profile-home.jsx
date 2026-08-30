// for static method, use an Outlet to route the children
import { Outlet } from 'react-router';

// for dynamic segment method, import useParams to use the dynamic segment
import { useParams } from 'react-router';
import DefaultProfile from './profile-default';
import { Spinach, Popeye } from './nested-routes';

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from Profile page</h1>
      <p>Howdy!</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {/* For static segment method, use an Outlet */}
      <Outlet />
      {/* Use conditional rendering along with the destructured segment */}
      {/* {name === 'popeye' ? (
        <Popeye />
      ) : name === 'spinach' ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )} */}
    </div>
  );
};

export default Profile;
