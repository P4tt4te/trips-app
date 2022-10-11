import React from 'react';
import styled from 'styled-components';
import { Button } from './../Button/Button';

const TripCardTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  font-variation-settings: 'wght' 700;
`;

const TripCardContainer = styled.div`
  grid-column: auto / span 2;
  display: flex;
  align-items: flex-end;
  height: 48rem;
  border-radius: 3.2rem;
  overflow: hidden;
  padding: 2rem;
  background-size: cover;
  background-position: top;
`;

const TripCardMeta = styled.div`
  font-size: 1.6rem;
  padding: 2rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
`;

const TripCardDetails = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.grey};
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
`;

const TripCardPrice = styled.span`
  display: block;
  font-size: 2rem;
  font-variation-settings: 'wght' 700;
  margin: 2rem 0;
`;

const TripCardSeats = styled.span`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.greyGreen};
  padding: 0.8rem;
  border-radius: 1.2rem;
  font-size: 1.2rem;
  font-variation-settings: 'wght' 600;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.green};
`;

export const TripCard = ({ trip, onClick }) => {
  return (
    <TripCardContainer
      style={{
        backgroundImage: `url(img/destinations/${trip.image})`,
      }}
    >
      <TripCardMeta>
        <TripCardTitle>{trip.destination}</TripCardTitle>
        <TripCardDetails>
          {trip.start.date}, {trip.start.location}
        </TripCardDetails>
        <TripCardDetails>
          {trip.end.date}, {trip.end.location}
        </TripCardDetails>
        <TripCardPrice>{trip.price}€</TripCardPrice>
        <TripCardSeats>{trip.seats} seats left</TripCardSeats>
        <Button onClick={onClick} name="Select" />
      </TripCardMeta>
    </TripCardContainer>
  );
};
