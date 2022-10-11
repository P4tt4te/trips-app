import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1.2rem;
  border: 0;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
`;

const ButtonDefault = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.green};
  color: white;
`;

const ButtonGray = styled(StyledButton)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray};
`;

export const Button = ({ name, onClick, variant }) => {
  if (variant === 'gray') {
    return <ButtonGray onClick={onClick && onClick}>{name}</ButtonGray>;
  } else {
    return <ButtonDefault onClick={onClick && onClick}>{name}</ButtonDefault>;
  }
};
