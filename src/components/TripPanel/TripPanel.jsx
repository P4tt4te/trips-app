import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

const StyledTripPanel = styled.div`
  position: fixed;
  backdrop-filter: blur(10px);
  top: 0;
  bottom: 0;
  right: ${(props) => props.width};
  width: 40rem;
  background: white;
  transition: 1s cubic-bezier(0.28, 1.01, 0.37, 1) all;
  padding: 3.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TripPanelTitle = styled.div`
  font-variation-settings: 'wght' 700;
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
`;

const TripPanelItem = styled.div`
  border-radius: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

const TripPanelItemTitle = styled.h3`
  font-variation-settings: 'wght' 700;
  margin-bottom: 0.8rem;
`;

const TripPanelItemDate = styled.div`
  color: ${(props) => props.theme.colors.grey};
`;

const TripPanelItemPrice = styled.span`
  display: block;
  font-variation-settings: 'wght' 700;
  margin-top: 0.8rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  display: 100%;
`;

export const TripPanel = ({ trip, dispatch, setSeats }) => {

  const handleValidate = () => {
    dispatch({ type: 'add_trip', trip: trip });
    dispatch({ type: 'remove_selectedTrip' });
    setSeats({ type: 'change_seats', seats: -1, idTrip: trip.id });
  };

  const handleAnnulate = () => {
    dispatch({ type: 'remove_selectedTrip' });
  };

  return (
    <StyledTripPanel width={trip ? '0' : '-100%'}>
      <div>
        <TripPanelTitle>Your selection</TripPanelTitle>
        {trip && (
          <>
            <TripPanelItem>
              <TripPanelItemTitle>{trip.destination}</TripPanelItemTitle>
              <TripPanelItemDate>{trip.start.date}</TripPanelItemDate>
              <TripPanelItemPrice>{trip.price}€</TripPanelItemPrice>
            </TripPanelItem>
          </>
        )}
      </div>
      <div className="test">
        <ButtonsContainer>
          <Button name="Confirm selection" onClick={handleValidate} />
          <Button name="Cancel" variant="lightgrey" onClick={handleAnnulate} />
        </ButtonsContainer>
      </div>
    </StyledTripPanel>
  );
};
