import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1.6rem;
  font-size: 1.6rem;
  font-variation-settings: 'wght' 500;
  border-radius: 1.2rem;
  width: 100%;
`;

const ButtonDefault = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.green};
  color: white;
`;

const ButtonGray = styled(StyledButton)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.grey};
`;

export const Button = ({ name, onClick, variant }) => {
  if (variant === 'gray') {
    return <ButtonGray onClick={onClick && onClick}>{name}</ButtonGray>;
  } else {
    return <ButtonDefault onClick={onClick && onClick}>{name}</ButtonDefault>;
  }
};
