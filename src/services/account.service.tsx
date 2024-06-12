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

const getUserAccountById = async (
  accountId: string
): Promise<Account | undefined> => {
  const account = mockedAccounts.ACCOUNTS.find(
    (account) => account.id === accountId
  );
  return account ? Promise.resolve(account) : Promise.reject(undefined);
};

export default { getUserAccounts, getUserAccountById };
