import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

export const TripCard = ({ trip }) => {
  const TripCardTitle = styled.h1`
    font-size: 1.5em;
    font-weight: bold;
  `;

  const TripCardContainer = styled.div``;

  const TripCardMeta = styled.div`
    font-size: 1em;
  `;

  const TripCardDate = styled.span``;

  const TripCardPrice = styled.span`
    display: block;
  `;

  const TripCardSeats = styled.span`
    display: block;
  `;

  return (
    <TripCardContainer>
      <TripCardTitle>{trip.country}</TripCardTitle>
      <TripCardMeta>
        <TripCardDate>
          {trip.start.date}, {trip.start.location}
        </TripCardDate>
        <TripCardDate>
          {trip.end.date}, {trip.end.location}
        </TripCardDate>
        <TripCardPrice>{trip.price}€</TripCardPrice>
        <TripCardSeats>{trip.seats} seats left</TripCardSeats>
      </TripCardMeta>
      <Button name="Select" />
    </TripCardContainer>
  );
};
