import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Browse</Link>
        <Link to="/about">How it works</Link>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
