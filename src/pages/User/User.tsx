import { FC } from "react";
import "./_User.scss";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import UserHeader from "../../components/User/UserHeader/UserHeader";
import UserAccounts from "../../components/User/UserAccounts/UserAccounts";

const User: FC = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <UserHeader />
        <UserAccounts />
      </main>
      <Footer />
    </>
  );
};

export default User;
