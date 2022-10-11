import React from 'react';
import styled, { css } from 'styled-components';

export const Button = ({ name, onClick }) => {
  const StyledButton = styled.button`
    font-size: 1.2rem;
    text-align: center;
    color: white;
    border: 0;
    padding: 10px;
    background-color : #20B970;
    border-radius: 8px;
  `;

  return <StyledButton onClick={onClick && onClick}>{name}</StyledButton>;
};
