import { useContext } from 'react';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import SearchForm from './components/SearchForm';
import {
  ListTd,
  PrinceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './TransactionsStyles';
import { TransactionsContext } from '../../contexts/ TransactionsContext';

function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <ListTd width="50%">{transaction.description}</ListTd>
                  <ListTd>
                    <PrinceHighLight variant="income">
                      {transaction.price}
                    </PrinceHighLight>
                  </ListTd>
                  <ListTd>{transaction.category}</ListTd>
                  <ListTd>{transaction.createdAt}</ListTd>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}

export default Transactions;
