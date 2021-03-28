import { useEffect, useState } from 'react';
import api from 'services/api';
import * as S from './styles';

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => setTransactions(response.data));
  }, []);

  return (
    <S.ContainerTable>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Meracado</td>
            <td className="withdraw">-R$580,00</td>
            <td>Compra</td>
            <td>25/03/2021</td>
          </tr>

          <tr>
            <td>Meracado</td>
            <td className="deposit">R$580,00</td>
            <td>Deposito</td>
            <td>25/03/2021</td>
          </tr>
        </tbody>
      </table>
    </S.ContainerTable>
  );
}
