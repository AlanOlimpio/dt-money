import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { SummaryCard, SummaryContainer } from './SummaryStyles';
import { defaultTheme } from '../../styles/themes/default';

function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={defaultTheme['green-300']} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={defaultTheme['red-300']} />
        </header>
        <strong>R$ 1.259,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={defaultTheme.white} />
        </header>
        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
export default Summary;
