import * as Dialog from '@radix-ui/react-dialog';
import {
  CloseButtom,
  Content,
  NewTrasactionButton,
  Overlay,
  TransactionsType,
  TransactionsTypeButton,
} from './NewTransactionModalStyles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
function NewTransactionModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NewTrasactionButton>Nova transação</NewTrasactionButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Nova transação</Dialog.Title>
          <CloseButtom>
            <X size={24} />
          </CloseButtom>
          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />
            <TransactionsType>
              <TransactionsTypeButton variant="income" value="income">
                <ArrowCircleUp size={24} />
                Entrada
              </TransactionsTypeButton>
              <TransactionsTypeButton variant="outcome" value="outcome">
                <ArrowCircleDown size={24} /> Saída
              </TransactionsTypeButton>
            </TransactionsType>
            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NewTransactionModal;
