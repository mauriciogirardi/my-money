import { useCallback, useState } from 'react';
import Logo from 'assets/logo.svg';

import * as S from './styles';

interface HeaderProps {
  onNewOpenTransactionModal(): void;
}

export function Header({ onNewOpenTransactionModal }: HeaderProps) {
  return (
    <S.ContainerHeader>
      <div>
        <img src={Logo} alt="my money" />
        <button type="button" onClick={onNewOpenTransactionModal}>
          Nova transação
        </button>
      </div>
    </S.ContainerHeader>
  );
}
