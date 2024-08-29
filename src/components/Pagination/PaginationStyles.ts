import styled, { css } from 'styled-components';

interface PaginationListProps {
  $isActive?: boolean;
}
interface PaginationPrevProps {
  $hasPrev?: boolean;
}
interface PaginationNextProps {
  $hasNext?: boolean;
}

const alignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationContainer = styled.div`
  ${({ theme }) => css`
    ${alignCenter}
    margin: 2.5rem auto;
    gap: 0.5rem;
    width: 216px;
    max-width: 100%;

    ul {
      display: grid;
      grid-auto-flow: column;
      margin: 0 auto;
      gap: 0.5rem;
      width: 216px;
      overflow-x: scroll;
      padding: 2rem 0;
      cursor: pointer;
      justify-content: space-evenly;
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
    }
  `}
`;

export const PaginationList = styled.li<PaginationListProps>`
  ${({ theme, $isActive }) => css`
    list-style: none;
      width: 40px;
      height: 40px;
      background-color: ${$isActive ? theme['green-700'] : theme['gray-600']};
      color: ${$isActive ? theme['gray-100'] : theme['gray-400']};
      ${alignCenter}
      border: 0;
      border-radius: 6px;
       cursor: ${!$isActive ? ' pointer' : 'not-allowed'};
    }
  `}
`;

export const PaginationPrev = styled.span<PaginationPrevProps>`
  ${({ theme, $hasPrev }) => css`
    ${alignCenter}
    svg {
      color: ${$hasPrev ? theme['green-500'] : theme['gray-600']};
      cursor: ${$hasPrev ? ' pointer' : 'not-allowed'};
    }
  `}
`;

export const PaginationNext = styled.span<PaginationNextProps>`
  ${({ theme, $hasNext }) => css`
    ${alignCenter}
    svg {
      color: ${$hasNext ? theme['green-500'] : theme['gray-600']};
      cursor: ${$hasNext ? ' pointer' : 'not-allowed'};
    }
  `}
`;
