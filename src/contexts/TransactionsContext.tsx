import { createContext, ReactNode } from 'react';
import { useTransactions } from '../hooks/useTransactions';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionContextType {
  transactions: Transaction[];
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
  page: number;
  pages: number;
  total: number;
  isLoading: boolean;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const {
    createTransaction,

    transactions,
    page,
    total,
    isLoading,
  } = useTransactions();

  const pages = total % 10 !== 0 ? total / 10 + 1 : 1;
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        page,
        pages,
        total,
        isLoading,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
