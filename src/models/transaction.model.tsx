export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  balance: number;
  type: string;
  category: string;
  notes: string;
}
