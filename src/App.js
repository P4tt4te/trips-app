import { useReducer } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { TripCardList } from './components/TripCardList/TripCardList';
import { ClientTripCardList } from './components/ClientTripCardList/ClientTripCardList';
import { Searchbar } from './components/Searchbar/Searchbar';
import { Username } from './components/Username/Username';
import { TripPanel } from './components/TripPanel/TripPanel';
import { Routes, Route } from 'react-router-dom';
import { ClientState } from './store/states/ClientState';
import { ClientReducer } from './store/reducers/ClientReducer';
import { TripsState } from './store/states/TripsState';
import { TripsReducer } from './store/reducers/TripsReducer';
import { COLORS } from './style/colors';

import './assets/fonts/plus-jarkarta-sans/style.css';

import styled, { ThemeProvider } from 'styled-components';

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

const AppTitle = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 3.2rem;
  font-variation-settings: 'wght' 700;
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
                  <AppTitle>Browse Destinations</AppTitle>
                  <TripCardList trips={TripsLocalState.trips} addSelectTrip={ClientDispatch} />
                  <TripPanel trip={ClientLocalState.selectedTrip} dispatch={ClientDispatch} />
                </div>
              }
            />
            <Route
              path="my-trips"
              element={
                <div
                  style={{
                    borderRadius: '2rem',
                    padding: '3.6rem',
                    margin: '2rem',
                    backgroundColor: '#EDF5F1',
                  }}
                >
                  <AppTitle>
                    {/* {ClientLocalState.username} */}
                    Your Booked Trips
                  </AppTitle>
                  <ClientTripCardList
                    trips={ClientLocalState.trips}
                    dispatch={ClientDispatch}
                  />
                </div>
              }
            />
          </Routes>
        </div>
      </AppTheme>
    </ThemeProvider>
  );
}

export default App;
