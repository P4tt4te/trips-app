import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

const StyledTripPanel = styled.div`
  position: fixed;
  backdrop-filter: blur(10px);
  bottom: 0;
  right: ${(props) => props.width};
  top: 0;
  width: 400px;
  background: white;
  transition: 0.4s ease-out all;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderTripPanel = styled.div`
  font-variation-settings: 'wght' 700;
  font-size: 4rem;
  text-align: center;
`;

const TripContainer = styled.div`
  padding: 1rem;
  border-radius: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  display: 100%;
`;

export const TripPanel = ({ trip, dispatch }) => {
  useEffect(() => {
    console.log(trip);
  }, [trip]);

  const handleValidate = () => {
    dispatch({ type: 'add_trip', trip: trip });
    dispatch({ type: 'remove_selectedTrip' });
  };

  const handleAnnulate = () => {
    dispatch({ type: 'remove_selectedTrip' });
  };

  return (
    <StyledTripPanel width={trip ? '0' : '-400px'}>
      <HeaderTripPanel>Votre voyage :</HeaderTripPanel>
      {trip && (
        <div>
          <TripContainer>
            <p>destination :</p>
            <p>{trip.destination}</p>
          </TripContainer>
          <ButtonsContainer>
            <Button name="Valider la réservation" onClick={handleValidate} />
            <Button
              name="Annuler ?"
              variant="lightgrey"
              onClick={handleAnnulate}
            />
          </ButtonsContainer>
        </div>
      )}
    </StyledTripPanel>
  );
};
