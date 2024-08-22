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
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';

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
                    <PrinceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PrinceHighLight>
                  </ListTd>
                  <ListTd>{transaction.category}</ListTd>
                  <ListTd>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </ListTd>
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
