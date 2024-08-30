import styled, { css, keyframes } from 'styled-components';

interface listProps {
  width?: '10%' | '20%' | '30%' | '40%' | '50%';
}

interface PrinceHighLightProps {
  $variant: 'income' | 'outcome';
}

const rotate = keyframes`
100%{
    transform: rotate(360deg);
   }
`;

export const TransactionsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 5rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
`;

export const ListTd = styled.td<listProps>`
  ${({ theme, width }) => css`
    ${width &&
    css`
      width: ${width};
    `}
    padding: 1.25rem 2rem;
    background-color: ${theme['gray-700']};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  `}
`;

export const PrinceHighLight = styled.span<PrinceHighLightProps>`
  ${({ theme, $variant }) => css`
    color: ${$variant === 'income' ? theme['green-300'] : theme['red-300']};
  `}
`;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfiniteRotate = styled.div`
  animation: ${rotate} 0.75s linear infinite;
`;
