import { Account } from "../models/account.model";
import mockedAccounts from "../../public/mocked-accounts.json";

const getUserAccounts = async (
  userId: string
): Promise<Account[] | undefined> => {
  const accounts = mockedAccounts.ACCOUNTS.filter(
    (account) => account.userId === userId
  );
  return accounts.length > 0
    ? Promise.resolve(accounts)
    : Promise.reject(undefined);
};

const getAccountById = async (
  accountId: string,
  userId: string
): Promise<Account | undefined> => {
  const account = mockedAccounts.ACCOUNTS.find(
    (account) => account.id === accountId && account.userId === userId
  );
  console.log("account-id", accountId);
  console.log("account-service", account);
  return account ? Promise.resolve(account) : Promise.reject(undefined);
};

export default { getUserAccounts, getAccountById };
