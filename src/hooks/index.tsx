import { ReactNode } from 'react';
import { TransactionsProvider } from './TransactionsContext';

interface TransactionProviderProps {
  children: ReactNode;
}

export default function TransactionProvider({
  children,
}: TransactionProviderProps) {
  return <TransactionsProvider>{children}</TransactionsProvider>;
}
