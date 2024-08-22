import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled, { css } from 'styled-components';

interface TransactionsTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const NewTrasactionButton = styled.button`
  ${({ theme }) => css`
    height: 50px;
    border: 0;
    background-color: ${theme['green-500']};
    color: ${theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background: ${theme['gray-700']};
    }
  `}
`;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2rem 3rem;
    background-color: ${theme['gray-800']};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        border-radius: 6px;
        border: 0;
        background-color: ${theme['gray-900']};
        color: ${theme['gray-300']};
        padding: 1rem;

        &::pacheholder {
          color: ${theme['gray-500']};
        }
      }
      button[type='submit'] {
        height: 58px;
        border: 0;
        background: ${theme['green-500']};
        color: ${theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1rem;
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
          background: ${theme['gray-700']};
        }
      }
    }
  `}
`;

export const CloseButtom = styled(Dialog.Close)`
  ${({ theme }) => css`
    position: absolute;
    background-color: transparent;
    border: 0;
    top: 1.5rem;
    right: 2.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${theme['green-500']};
  `}
`;

export const TransactionsType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const TransactionsTypeButton = styled(
  RadioGroup.Item,
)<TransactionsTypeButtonProps>`
  ${({ theme, variant }) => css`
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    background-color: ${theme['green-700']};
    color: ${theme['gray-300']};
    align-items: center;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    svg {
      color: ${variant === 'income' ? theme['green-300'] : theme['red-300']};
    }
    &[data-state='unchecked']:hover {
      transition: background-color 0.2s;
      background: ${theme['gray-600']};
    }
    &[data-state='checked'] {
      color: ${theme.white};
      background: ${variant === 'income'
        ? theme['green-500']
        : theme['red-500']};
      svg {
        color: ${theme.white};
      }
    }
  `}
`;
