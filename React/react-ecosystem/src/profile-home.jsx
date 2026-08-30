import { Outlet } from 'react-router';

const Profile = () => {
  return (
    <div>
      <h1>Hello from Profile page</h1>
      <p>Howdy!</p>
      {/* <Link to="/">Return home</Link> */}
      <hr />
      <h2>The profile visited is here:</h2>
      <Outlet />
    </div>
  );
};

export default Profile;
