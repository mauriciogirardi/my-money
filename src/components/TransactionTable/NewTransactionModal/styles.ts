import styled from 'styled-components';
import { transparentize } from 'polished';

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
};

export const ContainerForm = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    outline-color: var(--green);

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    background-color: var(--green);
    color: var(--shape);
    font-size: 1.1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  button.button-close {
    position: absolute;
    right: 2rem;
    top: 2rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const TransactionType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-radius: 0.25rem;
  border: 0;
  width: 48.5%;
  font-size: 1rem;
  font-weight: 500;
  outline: 0;
  border: 1px solid #d7d7d7;
  background: ${props =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};
  transition: all 0.2s;

  &:hover {
    border-color: #aaa;
    letter-spacing: 0.1rem;
  }

  img {
    margin-left: 1rem;
    width: 20px;
    height: 20px;
  }
`;
