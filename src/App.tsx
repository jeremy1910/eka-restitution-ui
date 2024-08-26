import React from 'react';
import EkaRoutes from './EkaRoutes';
import './i18n';
import 'eka-styles/dist/common/styles/reset.css';
import TopBar from './Containers/TopBar';
import { CustomThemeProvider } from './Contexts/ThemeContext';
import { AuthProvider, QueryClient, QueryClientProvider } from 'eka-components';


const App: React.FC = () => {

  const queryClient = new QueryClient();

  return <>
    <CustomThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <TopBar />
            <EkaRoutes />
          </AuthProvider>
        </QueryClientProvider>
    </CustomThemeProvider>
  </>;
};

export default App;