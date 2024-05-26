import { FC, useContext } from "react";
import "./_Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../context/authContext";

const iconUser = <FontAwesomeIcon icon={faUserCircle} />;
const iconSignOut = <FontAwesomeIcon icon={faRightFromBracket} />;

const Header: FC = () => {
  const { isLoggedIn, signOut } = useContext(AuthContext);

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
          {isLoggedIn ? (
            <>
              <NavLink
                className="main-nav-item main-nav-item-user"
                to="/user/1"
              >
                <span className="main-nav-icon">{iconUser}</span>
                FirstName
              </NavLink>
              <NavLink className="main-nav-item" to="/" onClick={signOut}>
                <span className="main-nav-icon">{iconSignOut}</span>
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
