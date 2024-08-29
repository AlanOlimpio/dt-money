import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import Transactions from './pages/Transactions';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
