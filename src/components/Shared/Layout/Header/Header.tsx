import { FC, useEffect, useState } from "react";
import "./_Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const iconUser = <FontAwesomeIcon icon={faUserCircle} />;
const iconLogOut = <FontAwesomeIcon icon={faRightFromBracket} />;

const Header: FC = () => {
  const [user, setUser] = useState<boolean>(true);

  useEffect(() => {
    setUser(true);
  }, []);

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
          {user ? (
            <>
              <NavLink
                className="main-nav-item main-nav-item-user"
                to="/user/1"
              >
                <span className="main-nav-icon">{iconUser}</span>
                FirstName
              </NavLink>
              <NavLink className="main-nav-item" to="/">
                <span className="main-nav-icon">{iconLogOut}</span>
                Sign Out
              </NavLink>
            </>
          ) : (
            <NavLink className="main-nav-item" to="/sign-in">
              <span className="main-nav-icon">{iconUser}</span>
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
