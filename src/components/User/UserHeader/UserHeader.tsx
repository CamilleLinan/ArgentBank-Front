import { FC } from "react";
import "./_UserHeader.scss";

const UserHeader: FC = () => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        FirstName LastName!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default UserHeader;
