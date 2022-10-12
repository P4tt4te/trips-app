import React from 'react';
import styled from 'styled-components';

const ClientTripCardImage = styled.img`
  height: 12rem;
  width: 12rem;
  border-radius: 1.6rem;
  margin-right: 2rem;
`;

const ClientTripCardTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  font-variation-settings: 'wght' 700;
`;

const ClientTripCardDelete = styled.span`
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGrey};
  height: 4.8rem;
  width: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.2s ease-in-out;
  transition-property: opacity, transform;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const ClientTripCardContainer = styled.div`
  grid-column: auto / span 3;
  background-color: ${(props) => props.theme.colors.white};
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover ${ClientTripCardDelete} {
    opacity: 1;
  }
`;

const ClientTripCardMeta = styled.div`
  display: flex;
  align-items: center;
`;

const ClientTripCardDetails = styled.div`
  color: ${(props) => props.theme.colors.grey};
`;

const ClientTripCardPrice = styled.span`
  display: block;
  font-size: 2rem;
  font-variation-settings: 'wght' 700;
  margin-top: 2rem;
`;

export const ClientTripCard = ({ trip, dispatch }) => {
  return (
    <ClientTripCardContainer>
      <ClientTripCardMeta>
        <ClientTripCardImage src={`img/destinations/${trip.image}`} />
        <div>
          <ClientTripCardTitle>{trip.destination}</ClientTripCardTitle>
          <ClientTripCardDetails>{trip.start.date}</ClientTripCardDetails>
          <ClientTripCardPrice>{trip.price}€</ClientTripCardPrice>
        </div>
      </ClientTripCardMeta>
      <ClientTripCardDelete
        onClick={() =>
          dispatch({
            type: 'remove_trip',
            tripId: trip.id,
          })
        }
      >
        <svg
          fill="#BCC8C2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          {' '}
          <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
        </svg>
      </ClientTripCardDelete>
    </ClientTripCardContainer>
  );
};
