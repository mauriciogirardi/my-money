import styled from 'styled-components';

export const ContainerHeader = styled.header`
  background-color: var(--blue);
  width: 100%;

  > div {
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: var(--blue-light);
      color: var(--shape);
      border: 0;
      font-size: 1rem;
      border-radius: 0.25rem;
      padding: 0 2rem;
      height: 3rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
