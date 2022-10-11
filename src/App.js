import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { COLORS } from './style/colors';
import styled, { ThemeProvider } from 'styled-components';
import { TripCardList } from './components/TripCardList/TripCardList';

const AppTheme = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
`;

function App() {
  const theme = {
    colors: COLORS,
    fontFamily: 'sans-serif',
  };

  return (
    <ThemeProvider theme={theme}>
      <AppTheme>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<TripCardList></TripCardList>} />
            <Route path="my-trips" element={<h1>My Trips</h1>} />
          </Routes>
        </div>
      </AppTheme>
    </ThemeProvider>
  );
}

export default App;
