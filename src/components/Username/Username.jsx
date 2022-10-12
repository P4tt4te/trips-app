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

export const Username = ({username}) => {
  return (
    <UsernameContainer>
      <UsernameTitle>Hello, {username} 👋</UsernameTitle>
      <UsernameBaseline>Welcome to our travel app. Start browsing now!</UsernameBaseline>
    </UsernameContainer>
  );
};
