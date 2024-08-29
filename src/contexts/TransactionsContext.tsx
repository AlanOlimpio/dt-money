import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { useSearchParams } from 'react-router-dom';

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
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
  page: number;
  pages: number;
  total: number;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface urlParamsProps {
  _page?: number;
  _sort?: string;
  _order?: string;
  q?: string;
}
export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const querySearch = searchParams.get('q') ? searchParams.get('q') : undefined;
  const [total, setTotal] = useState(0);
  const pages = total % 10 !== 0 ? total / 10 + 1 : 1;

  async function fetchTransactions() {
    let urlParams: urlParamsProps = {
      _sort: 'createdAt',
      _order: 'desc',
    };
    if (page) {
      urlParams = {
        ...urlParams,
        _page: page,
      };
    }

    if (querySearch) {
      urlParams = {
        ...urlParams,
        q: querySearch,
      };
    }
    const response = await api.get(`transactions?_limit=10`, {
      params: urlParams,
    });

    setTotal(response.headers['x-total-count']);
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data;

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, [page, querySearch]);
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        page,
        pages,
        total,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
