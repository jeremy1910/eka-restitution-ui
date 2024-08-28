import React from 'react';
import EkaRoutes from './EkaRoutes';
import './i18n';
import 'eka-styles/dist/common/styles/reset.css';
import TopBar from './Containers/TopBar';
import { CustomThemeProvider } from './Contexts/ThemeContext';
import { AuthProvider, QueryClient, QueryClientProvider } from 'eka-components';
import Layout from './Containers/Layout';


const App: React.FC = () => {

  const queryClient = new QueryClient();

  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return <>
    <CustomThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Layout>
            <EkaRoutes />
          </Layout>
        </AuthProvider>
      </QueryClientProvider>
    </CustomThemeProvider>
  </>;
};

export default App;