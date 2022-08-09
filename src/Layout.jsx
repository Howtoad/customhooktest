import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h1>Amazing Pokemon</h1>
      <nav>
        <menu>
          <li>
            <Link to="/">Home</Link>
          </li>
        </menu>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
