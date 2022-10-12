import React from 'react';
import styled from 'styled-components';

import { ClientTripCardList } from './../../components/ClientTripCardList/ClientTripCardList';

const MyTripsViewContainer = styled.section`
  border-radius: 2rem;
  padding: 3.6rem;
  margin: 2rem;
  background-color: #edf5f1;
`;

const AppTitle = styled.h1`
  font-size: 3.2rem;
  font-variation-settings: 'wght' 700;
`;

export const MyTripsView = ({ trips, dispatch, changeSeats }) => {
  return (
    <MyTripsViewContainer>
      <AppTitle>Your Booked Trips 🗓️</AppTitle>
      <ClientTripCardList trips={trips} dispatch={dispatch} changeSeats={changeSeats} />
    </MyTripsViewContainer>
  );
};
