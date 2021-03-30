import formattedAmount from 'utils/formattedAmount';
import formattedDate from 'utils/formattedDate';
import { useTransactions } from 'hooks/TransactionsContext';
import * as S from './styles';

export function TransactionTable() {
  const { transactions } = useTransactions();

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

        {transactions.map(transaction => (
          <tbody key={transaction.id}>
            <tr>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formattedAmount(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formattedDate(transaction.createdAt)}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </S.ContainerTable>
  );
}
