import { useContext } from 'react';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import SearchForm from './components/SearchForm';
import {
  InfiniteRotate,
  ListTd,
  LoadingContainer,
  PrinceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './TransactionsStyles';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';
import Pagination from '../../components/Pagination';
import { CircleNotch } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

function Transactions() {
  const { transactions, page, pages, total, isLoading } =
    useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        {isLoading && (
          <LoadingContainer>
            <InfiniteRotate>
              <CircleNotch color={defaultTheme['green-500']} size={100} />
            </InfiniteRotate>
          </LoadingContainer>
        )}
        {!isLoading && transactions && (
          <TransactionsTable>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <ListTd width="50%">{transaction.description}</ListTd>
                    <ListTd>
                      <PrinceHighLight $variant={transaction.type}>
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
        )}

        {!isLoading && total > 0 && <Pagination page={page} pages={pages} />}
      </TransactionsContainer>
    </div>
  );
}

export default Transactions;
