import React from 'react';
import styled from 'styled-components';

import { SettingsContent } from './../../components/SettingsContent/SettingsContent';

const SettingsViewContainer = styled.section`
  border-radius: 2rem;
  padding: 3.6rem;
  margin: 2rem;
  background-color: #edf5f1;
`;

export const SettingsView = ({ username, dispatch }) => {
  return (
    <SettingsViewContainer>
      <SettingsContent username={username} onSubmit={dispatch} />
    </SettingsViewContainer>
  );
};
