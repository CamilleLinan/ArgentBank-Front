import { FC } from "react";
import "./_Profile.scss";
import UserHeader from "../../components/Profile/UserHeader/UserHeader";
import UserAccounts from "../../components/Profile/UserAccounts/UserAccounts";
import { useAppSelector } from "../../redux/store";

const Profile: FC = () => {
  const { userData } = useAppSelector((state) => state.user);

  return (
    <main className="main bg-dark">
      <UserHeader userData={userData} />
      <UserAccounts userId={userData?.id} />
    </main>
  );
};

export default Profile;
