import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <h2>Users</h2>
      <p>Dynamic routes example with 1 static route</p>
      <p>Nested route: Use Outlet component</p>
      <ul>
        <li>
          <a href="/users/1">User 1</a>
        </li>
        <li>
          <a href="/users/2">User 2</a>
        </li>
        <li>
          <a href="/users/3">User 3</a>
        </li>
        <li>
          <a href="/users/admin">Admin User</a>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Users;
