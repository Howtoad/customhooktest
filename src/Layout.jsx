/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Layout = () => {
  const styles = {
    header: css`
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #0075be;
      color: #ffcc00;
    `,
  };
  return (
    <div>
      <h1 css={styles.header}>Amazing Pokemon</h1>
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
