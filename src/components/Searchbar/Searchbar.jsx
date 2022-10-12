import React from 'react';
import styled from 'styled-components';

const StyledSearchbar = styled.input`
  padding: 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 4.8rem;
  width: 50%;
  border-radius: 0.8rem;
`;

export const Searchbar = ({ setQuery }) => {
  return (
    <>
      <StyledSearchbar
        placeholder="Search a destination"
        onChange={(event) => setQuery(event.target.value)}
      />
    </>
  );
};
