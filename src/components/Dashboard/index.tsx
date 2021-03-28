import { Summary } from 'components/Summary';
import { TransactionTable } from 'components/TransactionTable';
import * as S from './styles';

export function Dashboard() {
  return (
    <S.ContainerDashboard>
      <Summary />
      <TransactionTable />
    </S.ContainerDashboard>
  );
}
