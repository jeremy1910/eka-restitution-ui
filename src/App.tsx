import React from 'react';
import EkaRoutes from './EkaRoutes';
import './i18n';
import TopBar from './Containers/TopBar';
import { CustomThemeProvider } from './Contexts/ThemeContext';

const App: React.FC = () => {

  return <>
    <CustomThemeProvider>
      <TopBar />
      <EkaRoutes />
    </CustomThemeProvider>
  </>;
};

export default App;