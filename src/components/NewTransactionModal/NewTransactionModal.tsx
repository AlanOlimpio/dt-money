import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import {
  CloseButtom,
  Content,
  NewTrasactionButton,
  Overlay,
  TransactionsType,
  TransactionsTypeButton,
} from './NewTransactionModalStyles';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContext } from 'react';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data;

    await createTransaction({
      description,
      price,
      category,
      type,
    });

    reset();
  }

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
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register('description')}
            />
            <input
              type="number"
              placeholder="Preço"
              required
              {...register('price', { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register('category')}
            />
            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionsType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionsTypeButton $variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionsTypeButton>
                    <TransactionsTypeButton $variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} /> Saída
                    </TransactionsTypeButton>
                  </TransactionsType>
                );
              }}
            />
            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NewTransactionModal;
