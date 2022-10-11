import { useReducer } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { ClientState } from './store/states/ClientState';
import { ClientReducer } from './store/reducers/ClientReducer';
import { TripsState } from './store/states/TripsState';
import { TripsReducer } from './store/reducers/TripsReducer';
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
  align-items: start;
`;

function App() {
  const [ClientLocalState, ClientDispatch] = useReducer(
    ClientReducer,
    ClientState
  );

  const [TripsLocalState, TripsDispatch] = useReducer(
    TripsReducer,
    TripsState
  );

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
                  <TripCardList trips={TripsLocalState.trips} />
                </div>
              }
            />
            <Route
              path="my-trips"
              element={
                <div>
                  <h1>My Trips ({ClientLocalState.username}) : </h1>
                  {ClientLocalState.trips.length > 0 ? (
                    ClientLocalState.trips.map((city) => {
                      return (
                        <div key={city.id}>
                          <span>id: {city.id}</span>
                          <p>{city.destination}</p>
                          <button
                            onClick={() =>
                              ClientDispatch({
                                type: 'remove_trip',
                                tripId: city.id,
                              })
                            }
                          >
                            Delete
                          </button>
                        </div>
                      );
                    })
                  ) : (
                    <p>Aucun trajet reservé.</p>
                  )}
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
