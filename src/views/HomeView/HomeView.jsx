import React from 'react';
import styled from 'styled-components';

import { TripCardList } from './../../components/TripCardList/TripCardList';
import { Searchbar } from './../../components/Searchbar/Searchbar';
import { Username } from './../../components/Username/Username';
import { TripPanel } from './../../components/TripPanel/TripPanel';

const HomeViewContainer = styled.section`
  border-radius: 2rem;
  padding: 3.6rem;
  margin: 2rem;
  background-color: #edf5f1;
`;

const AppTitle = styled.h1`
  font-size: 3.2rem;
  font-variation-settings: 'wght' 700;
`;

export const HomeView = ({
  username,
  trips,
  addSelectTrip,
  trip,
  dispatch,
  changeSeats
}) => {
  return (
    <HomeViewContainer>
      <Username username={username} />
      <Searchbar onChange={null} />
      <AppTitle>Browse Destinations</AppTitle>
      <TripCardList trips={trips} addSelectTrip={addSelectTrip} />
      <TripPanel trip={trip} dispatch={dispatch} setSeats={changeSeats} />
    </HomeViewContainer>
  );
};
