import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = ({ name, onClick }) => {
  const StyledNavBar = styled.div`
    font-size: 1.2rem;
    text-align: center;
    color: white;
    border: 0;
    padding: 10px;
    background-color: #20b970;
    border-radius: 8px;
    background: white;
  `;

  const NavLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <StyledNavBar>
      <NavLinksContainer>
        <Link to="/">Home</Link>
        <Link to="/my-trips">My trips</Link>
      </NavLinksContainer>
    </StyledNavBar>
  );
};
