import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="site-header">
        <strong>Between Classes</strong>
        <nav>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Browse
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            How it works
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;