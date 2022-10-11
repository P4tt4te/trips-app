import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { COLORS } from './style/colors';

/* move this somewhere else */
import './assets/fonts/plus-jarkarta-sans/style.css';

import styled, { ThemeProvider } from 'styled-components';
import { TripCardList } from './components/TripCardList/TripCardList';
import { Searchbar } from './components/Searchbar/Searchbar';
import { Username } from './components/Username/Username';

const theme = {
  colors: COLORS,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: '1.6rem',
};

const AppTheme = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppTheme>
        <NavBar />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <div
                  style={{
                    borderRadius: '2rem',
                    padding: '3.6rem',
                    margin: '2rem',
                    backgroundColor: '#EDF5F1',
                  }}
                >
                  <Username />
                  <Searchbar />
                  <TripCardList />
                </div>
              }
            />
            <Route path="my-trips" element={<h1>My Trips</h1>} />
          </Routes>
        </div>
      </AppTheme>
    </ThemeProvider>
  );
}

export default App;
