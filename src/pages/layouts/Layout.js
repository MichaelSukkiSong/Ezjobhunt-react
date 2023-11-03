import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Outlet />
      <div>Login</div>
    </div>
  );
};

export default Layout;
