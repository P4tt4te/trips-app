import React, { useEffect, useState } from 'react';
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

const TripPanelSubTitle = styled.div`
  font-variation-settings: 'wght' 700;
  font-size: 2.4rem;
  margin-top: 1.6rem;
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

const TripPanelSeatsSelector = styled.div`
  width: 100%;
  display: flex;
`;

const SeatsChoiceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TripPanel = ({ trip, dispatch, setSeats }) => {
  const [seatsChoice, setSeatsChoice] = useState(1);

  useEffect(() => {
    if(seatsChoice < 1) {
      setSeatsChoice(1);
    }
  },[seatsChoice]);

  const handleValidate = () => {
    dispatch({ type: 'add_trip', trip: trip, seats: seatsChoice });
    dispatch({ type: 'remove_selectedTrip' });
    setSeats({ type: 'change_seats', seats: -seatsChoice, idTrip: trip.id });
    setSeatsChoice(1);
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
            <TripPanelSubTitle>Number of seats :</TripPanelSubTitle>
            <TripPanelSeatsSelector>
              <Button
                name="-"
                onClick={() => setSeatsChoice(seatsChoice - 1)}
              />
              <SeatsChoiceContainer>{seatsChoice}</SeatsChoiceContainer>
              <Button
                name="+"
                onClick={() => setSeatsChoice(seatsChoice + 1)}
              />
            </TripPanelSeatsSelector>
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
