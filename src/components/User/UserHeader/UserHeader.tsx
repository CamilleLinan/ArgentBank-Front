import { FC } from "react";
import "./_UserHeader.scss";
import { useAppSelector } from "../../../redux/store";

const UserHeader: FC = () => {
  const { userData } = useAppSelector((state) => state.user);
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
