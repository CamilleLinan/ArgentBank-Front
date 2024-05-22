import { FC } from "react";
import "./_Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const iconUser = <FontAwesomeIcon icon={faUserCircle} />

const Header: FC = () => {
  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink className="main-nav-item" to="/sign-in">
            <span className="main-nav-icon">{iconUser}</span>
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
