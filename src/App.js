import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { COLORS } from './style/colors';

/* move this somewhere else */
import './assets/fonts/plus-jarkarta-sans/style.css';

import styled, { ThemeProvider } from 'styled-components';
import { TripCardList } from './components/TripCardList/TripCardList';

const AppTheme = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
`;

function App() {
  const theme = {
    colors: COLORS,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '1.6rem',
  };

  return (
    <ThemeProvider theme={theme}>
      <AppTheme>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<TripCardList />} />
            <Route path="my-trips" element={<h1>My Trips</h1>} />
          </Routes>
        </div>
      </AppTheme>
    </ThemeProvider>
  );
}

export default App;
