import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import { Account } from "../../models/account.model";
import { Transaction } from "../../models/transaction.model";
import accountService from "../../services/account.service";
import { useParams } from "react-router-dom";

const UserAccount: FC = () => {
  const accountId = useParams();
  const { userData } = useAppSelector((state) => state.user);
  const [account, setAccount] = useState<Account>();
  const [accountTransactions, setAccountTransactions] = useState<Transaction[]>(
    []
  );

  useEffect(() => {
    const fetchUserAccount = async () => {
      if (userData) {
        const account = await accountService.getUserAccountById(
          accountId.toString()
        );
        if (account) {
          setAccount(account);
          setAccountTransactions(account.transactions);
        }
      }
    };

    fetchUserAccount();
  }, [accountId, userData, userData?.id]);

  console.log(account);
  console.log(accountTransactions);

  return <></>;
};

export default UserAccount;
