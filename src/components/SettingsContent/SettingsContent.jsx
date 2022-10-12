import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Searchbar } from '../Searchbar/Searchbar';

const SettingsContentContainer = styled.div`
  margin-bottom: 3.2rem;
`;

const SettingsContentTitle = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
  font-variation-settings: 'wght' 700;
`;

const SettingsContentSubtitle = styled.h2`
  font-size: 1.6rem;
  margin: 3.2rem 0 1.6rem 0;
  font-variation-settings: 'wght' 600;
`;

const SettingsContentBaseline = styled.h1`
  color: ${(props) => props.theme.colors.grey};
`;

export const SettingsContent = ({ username, onSubmit }) => {
  const [input, setInput] = useState(username);

  return (
    <SettingsContentContainer>
      <SettingsContentTitle>Settings ⚙️</SettingsContentTitle>
      <SettingsContentBaseline>Update your user data</SettingsContentBaseline>
      <SettingsContentSubtitle>Change Username</SettingsContentSubtitle>
      <Searchbar value={input} onChange={setInput} />
      <Button
        onClick={() => onSubmit({ type: 'change_username', username: input })}
        name="Save"
      />
    </SettingsContentContainer>
  );
};
