import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import Modal from 'react-modal';

import closeImg from 'assets/close.svg';
import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';
import * as S from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

const initialValue = {
  title: '',
  amount: 0,
  category: '',
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  const [values, setValues] = useState(initialValue);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setValues({ ...values, [name]: value });
    },
    [values],
  );

  const handleCreateNewTransactions = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.ContainerForm onSubmit={handleCreateNewTransactions}>
        <button type="button" onClick={onRequestClose} className="button-close">
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          name="title"
          onChange={onChange}
        />
        <input
          type="number"
          placeholder="Valor"
          name="amount"
          onChange={onChange}
        />

        <S.TransactionType>
          <S.RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            Entrada
            <img src={incomeImg} alt="Entrada" />
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            Saída
            <img src={outcomeImg} alt="Saída" />
          </S.RadioBox>
        </S.TransactionType>

        <input
          type="text"
          placeholder="Categoria"
          name="category"
          onChange={onChange}
        />

        <button type="submit">Cadastrar</button>
      </S.ContainerForm>
    </Modal>
  );
}
