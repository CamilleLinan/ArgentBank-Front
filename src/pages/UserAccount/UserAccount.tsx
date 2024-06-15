import { FC, useEffect, useState } from "react";
import "./_UserAccount.scss";
import { useAppSelector } from "../../redux/store";
import { Account } from "../../models/account.model";
import { Transaction } from "../../models/transaction.model";
import accountService from "../../services/account.service";
import { useParams } from "react-router-dom";
import AccountTile from "../../components/Shared/AccountTile/AccountTile";
import TransactionsTable from "../../components/UserAccount/TransactionsTable/TransactionsTable";

const UserAccount: FC = () => {
  const { id } = useParams();
  const { userData } = useAppSelector((state) => state.user);
  const [account, setAccount] = useState<Account>();
  const [accountTransactions, setAccountTransactions] = useState<Transaction[]>(
    []
  );

  useEffect(() => {
    const fetchUserAccount = async () => {
      if (id && userData) {
        const account = await accountService.getAccountById(id, userData.id);
        if (account) {
          setAccount(account);
          setAccountTransactions(account.transactions);
        }
      }
    };

    fetchUserAccount();
  }, [id, userData]);

  console.log("account", account);
  console.log("transac", accountTransactions);

  return (
    <>
      <main className="main bg-dark user-account">
        {account ? (
          <>
            <AccountTile
              key={account.id}
              classTile={"account-page"}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
            <TransactionsTable transactions={accountTransactions} />
          </>
        ) : null}
      </main>
    </>
  );
};

export default UserAccount;
