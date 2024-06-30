import { FC } from "react";
import "./_Unauthorized.scss";
import { NavLink } from "react-router-dom";

const Unauthorized: FC = () => {
  return (
    <main className="main bg-dark error">
      <p className="error-code">401</p>
      <p className="error-text">You must be logged in to access this page.</p>
      <p className="error-link">
        <NavLink to="/login">Sign in here</NavLink>
      </p>
    </main>
  );
};

export default Unauthorized;
