import React from 'react';
import { ThemeProvider } from 'evergreen-ui';
import { WhiteTheme } from './themes';
import Test from './components/testComponent/test';


const App = () => (
  <ThemeProvider value={WhiteTheme}>
    <Test />
  </ThemeProvider>
);

export default App;
