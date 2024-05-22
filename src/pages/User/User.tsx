import { FC } from "react";
import "./_User.scss";
import UserHeader from "../../components/User/UserHeader/UserHeader";
import UserAccounts from "../../components/User/UserAccounts/UserAccounts";

const User: FC = () => {
  return (
    <main className="main bg-dark">
      <UserHeader />
      <UserAccounts />
    </main>
  );
};

export default User;
