import styled from 'styled-components';
import { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme['gray-900']};
    padding: 2.5rem 0 7rem;
  `}
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTrasactionButton = styled.button`
  ${({ theme }) => css`
    height: 50px;
    border: 0;
    background: ${theme['green-500']};
    color: ${theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
    background: ${theme['gray-700']}
  `}
`;
