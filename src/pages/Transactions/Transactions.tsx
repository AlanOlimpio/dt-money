import Header from '../../components/Header';
import Summary from '../../components/Summary';
import {
  ListTd,
  PrinceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './TransactionsStyles';

function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <ListTd width="50%">Desenvolvimento de site</ListTd>
              <ListTd>
                <PrinceHighLight variant="income">R$ 12.000,00</PrinceHighLight>
              </ListTd>
              <ListTd>Venda</ListTd>
              <ListTd>13/04/2022</ListTd>
            </tr>
            <tr>
              <ListTd width="50%">Hamburguer</ListTd>
              <ListTd>
                <PrinceHighLight variant="outcome">- R$ 59,00</PrinceHighLight>
              </ListTd>
              <ListTd>Alimentação</ListTd>
              <ListTd>10/04/2022</ListTd>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}

export default Transactions;
