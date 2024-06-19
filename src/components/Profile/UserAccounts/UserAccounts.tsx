import { FC, useEffect, useState } from "react";
import "./_UserAccounts.scss";
import { useNavigate } from "react-router-dom";
import AccountTile from "../../Shared/AccountTile/AccountTile";
import accountService from "../../../services/account.service";
import { Account } from "../../../models/account.model";

interface UserProps {
  userId: string | undefined;
}

const UserAccounts: FC<UserProps> = ({ userId }) => {
  const onNavitage = useNavigate();
  const [userAccounts, setUserAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchUserAccount = async () => {
      if (userId) {
        const accounts = await accountService.getUserAccounts(userId);
        if (accounts) {
          setUserAccounts(accounts);
        }
      }
    };

    fetchUserAccount();
  }, [userId]);

  const handleNavigate = (id: string) => {
    onNavitage(`/account/${id}`);
  };

  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {userAccounts.map((account) => (
        <AccountTile
          key={account.id}
          title={account.title}
          amount={account.amount}
          description={account.description}
          onNavigate={() => handleNavigate(account.id)}
        />
      ))}
    </>
  );
};

export default UserAccounts;
