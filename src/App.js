import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClientState } from './store/states/ClientState';
import { ClientReducer } from './store/reducers/ClientReducer';
import { TripsState } from './store/states/TripsState';
import { TripsReducer } from './store/reducers/TripsReducer';

import styled, { ThemeProvider } from 'styled-components';
import { COLORS } from './style/colors';

import { NavBar } from './components/NavBar/NavBar';

import { HomeView } from './views/HomeView/HomeView';
import { MyTripsView } from './views/MyTripsView/MyTripsView';
import { SettingsView } from './views/SettingsView/SettingsView';

import './assets/fonts/plus-jarkarta-sans/style.css';

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
  align-items: start;
`;

function App() {
  const [ClientLocalState, ClientDispatch] = useReducer(
    ClientReducer,
    ClientState
  );

  const [TripsLocalState, TripsDispatch] = useReducer(TripsReducer, TripsState);

  return (
    <ThemeProvider theme={theme}>
      <AppTheme>
        <NavBar />
        <div style={{ width: '100%' }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomeView
                  username={ClientLocalState.username}
                  trips={TripsLocalState.trips}
                  addSelectTrip={ClientDispatch}
                  trip={ClientLocalState.selectedTrip}
                  dispatch={ClientDispatch}
                  changeSeats={TripsDispatch}
                />
              }
            />
            <Route
              path="my-trips"
              element={
                <MyTripsView
                  trips={ClientLocalState.trips}
                  dispatch={ClientDispatch}
                />
              }
            />
            <Route
              path="settings"
              element={
                <SettingsView
                  username={ClientLocalState.username}
                  dispatch={ClientDispatch}
                />
              }
            />
          </Routes>
        </div>
      </AppTheme>
    </ThemeProvider>
  );
}

export default App;
