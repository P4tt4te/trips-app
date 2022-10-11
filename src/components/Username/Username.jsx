import React from 'react';
import styled from 'styled-components';

const UsernameContainer = styled.div`
  margin-bottom: 3.2rem;
`;

const UsernameTitle = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
  font-variation-settings: 'wght' 700;
`;

const UsernameBaseline = styled.h1`
  color: ${(props) => props.theme.colors.grey};
`;

export const Username = () => {
  return (
    <UsernameContainer>
      <UsernameTitle>Hello, Anonymous! 👋</UsernameTitle>
      <UsernameBaseline>Welcome back and find your dreamed destination</UsernameBaseline>
    </UsernameContainer>
  );
};
