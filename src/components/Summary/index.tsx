import CountUp from 'react-countup';

import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';
import totalImg from 'assets/total.svg';

import * as S from './styles';

export function Summary() {
  return (
    <S.ContainerSummary>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="imagem de entradas" />
        </header>

        <strong>
          <CountUp
            end={1000}
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
            end={1000}
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
            end={0}
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
