import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from 'services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = useCallback(
    async (data: TransactionInput) => {
      try {
        const response = await api.post('/transactions', {
          ...data,
          createdAt: new Date(),
        });
        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
      } catch (error) {
        console.error(error);
      }
    },
    [transactions],
  );

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);
  return context;
}
