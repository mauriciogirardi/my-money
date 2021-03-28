import { useCallback, useState } from 'react';

import { Dashboard } from 'components/Dashboard';
import { Header } from 'components/Header';
import { GlobalStyle } from 'styles/GlobalStyle';
import { NewTransactionModal } from 'components/TransactionTable/NewTransactionModal';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  );

  const handleNewOpenTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const handleNewCloseTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header onNewOpenTransactionModal={handleNewOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewCloseTransactionModal}
      />
    </>
  );
}
