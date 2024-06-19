import { Transaction } from "./transaction.model";

export interface Account {
  id: string;
  userId: string;
  title: string;
  amount: string;
  description: string;
  transactions: Transaction[];
}
