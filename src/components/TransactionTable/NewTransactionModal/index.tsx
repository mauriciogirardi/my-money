import Modal from 'react-modal';

import * as S from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <S.ContainerForm>
        <h2>Cadastrar transação</h2>
      </S.ContainerForm>
    </Modal>
  );
}
