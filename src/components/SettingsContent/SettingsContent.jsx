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

const SettingsContentBaseline = styled.h1`
  color: ${(props) => props.theme.colors.grey};
`;

export const SettingsContent = ({ username, onSubmit }) => {
  const [input, setInput] = useState(username);

  return (
    <SettingsContentContainer>
      <SettingsContentTitle>Settings ⚙️</SettingsContentTitle>
      <SettingsContentBaseline>
        Change your name fast please !!!
      </SettingsContentBaseline>
      <SettingsContentTitle>Change Username</SettingsContentTitle>
      <Searchbar value={input} onChange={setInput} />
      <Button
        onClick={() => onSubmit({ type: 'change_username', username: input })}
        name="Validate"
      />
    </SettingsContentContainer>
  );
};
