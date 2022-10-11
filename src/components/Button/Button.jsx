import React from 'react';
import styled from 'styled-components';

export const Button = ({ name, onClick }) => {
  const StyledButton = styled.button`
    font-size: 1.2rem;
    text-align: center;
    color: white;
    border: 0;
    padding: 10px;
    background-color : ${props => props.theme.colors.green};
    border-radius: 8px;
  `;

  return <StyledButton onClick={onClick && onClick}>{name}</StyledButton>;
};
