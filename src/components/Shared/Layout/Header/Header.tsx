import { FC } from "react";
import "./_Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../redux/store";
import { signOut } from "../../../../redux/slice/authSlice";

const iconUser = <FontAwesomeIcon icon={faUserCircle} />;
const iconSignOut = <FontAwesomeIcon icon={faRightFromBracket} />;

const Header: FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { userData } = useAppSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut());
  };

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
                to="/profile"
              >
                <span className="main-nav-icon">{iconUser}</span>
                {userData?.firstName}
              </NavLink>
              <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
                <span className="main-nav-icon">{iconSignOut}</span>
                Sign Out
              </NavLink>
            </>
          ) : (
            <NavLink className="main-nav-item" to="/login">
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
