import CountUp from 'react-countup';

import { useTransactions } from 'hooks/TransactionsContext';
import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';
import totalImg from 'assets/total.svg';

import * as S from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposit += Number(transaction.amount);
        acc.total += Number(transaction.amount);
      } else {
        acc.withdraw += Number(transaction.amount);
        acc.total -= Number(transaction.amount);
      }

      return acc;
    },
    { deposit: 0, withdraw: 0, total: 0 },
  );

  return (
    <S.ContainerSummary>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="imagem de entradas" />
        </header>

        <strong>
          <CountUp
            end={summary.deposit}
            prefix="R$  "
            separator="."
            decimal=","
            decimals={2}
          />
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="imagem de entradas" />
        </header>

        <strong>
          <CountUp
            end={summary.withdraw}
            prefix="- R$  "
            separator="."
            decimal=","
            decimals={2}
          />
        </strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="imagem de entradas" />
        </header>

        <strong>
          <CountUp
            end={summary.total}
            prefix="R$  "
            separator="."
            decimal=","
            decimals={2}
          />
        </strong>
      </div>
    </S.ContainerSummary>
  );
}
