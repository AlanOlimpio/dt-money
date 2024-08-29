import { useQuery } from 'react-query';
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
import { useEffect, useState } from 'react';

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface urlParamsProps {
  _page?: number;
  _sort?: string;
  _order?: string;
  q?: string;
}

export const useTransactions = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const querySearch = searchParams.get('q') ? searchParams.get('q') : undefined;
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  let urlParams: urlParamsProps = {
    _sort: 'createdAt',
    _order: 'desc',
  };

  const fetchTransactions = async () => {
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
    const response = await api
      .get(`transactions?_limit=10`, {
        params: urlParams,
      })
      .then((response) => response);
    setTotal(response.headers['x-total-count']);

    const data = response.data;
    return data;
  };

  const { data, isLoading } = useQuery(
    ['transactions', page, querySearch],
    async () => fetchTransactions(),
  );

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
    if (data) {
      setTransactions(data);
    }
  }, [data]);

  return {
    isLoading,
    createTransaction,
    transactions,
    page,
    total,
  };
};
