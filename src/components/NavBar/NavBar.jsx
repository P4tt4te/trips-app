import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../Button/Button';

const StyledNavBar = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.gray};
  border: 0;
  background-color: #20b970;
  border-radius: 8px;
  background: white;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: max-content;
`;

export const NavBar = ({ name, onClick }) => {
  const location = useLocation();

  const linksNames = [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/my-trips',
      name: 'My Trips',
    },
  ];

  return (
    <StyledNavBar>
      <NavLinksContainer>
        {linksNames.map((linkname) => {
          return (
            <Link to={linkname.link}>
              <Button
                name={linkname.name}
                variant={
                  location.pathname === linkname.link
                    ? 'default'
                    : 'gray'
                }
              />
            </Link>
          );
        })}
      </NavLinksContainer>
    </StyledNavBar>
  );
};
