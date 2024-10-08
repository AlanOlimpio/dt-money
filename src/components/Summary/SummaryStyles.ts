import styled from 'styled-components';
import { css } from 'styled-components';

interface SummaryCardProps {
  $variant?: 'green';
}

export const SummaryContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1120px;
    margin: -5rem auto 0;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    overflow-x: scroll;
    padding-bottom: 1rem;
    &::-webkit-scrollbar {
      width: 8px !important;
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${theme['gray-800']};
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme['gray-600']};
      border-radius: 8px;
    }
  `}
`;

export const SummaryCard = styled.div<SummaryCardProps>`
  ${({ theme, $variant }) => css`
    background-color: ${$variant !== 'green'
      ? theme['gray-600']
      : theme['green-700']};
    border-radius: 6px;
    padding: 2rem;
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${theme['gray-300']};
    }
    strong {
      dispaly: block;
      margin-top: 1rem;
      font-size: 2rem;
    }
  `}
`;
