import { FC, useContext } from "react";
import "./_UserHeader.scss";
import AuthContext from "../../../context/authContext";

const UserHeader: FC = () => {
  const { userData } = useContext(AuthContext);
  const name = `${userData?.firstName} ${userData?.lastName}`;
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {name}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default UserHeader;
