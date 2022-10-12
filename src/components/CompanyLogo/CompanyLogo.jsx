import React from 'react';
import styled, { css } from 'styled-components';
// liste des images companies
import AirFrance from '../../assets/companies/air_france.svg';
import AmericanAirlines from '../../assets/companies/american_airlines.svg';
import BritishAirways from '../../assets/companies/british_airways.svg';
import Ryanair from '../../assets/companies/ryanair.svg';

const StyledCompanyLogo = styled.img`
  height: 15px;
  width: max-content;
`;

export const CompanyLogo = ({ company }) => {
  const companyChoice = (company) => {
    switch (company) {
      case 'Air France':
        return AirFrance;
      case 'American Airlines':
        return AmericanAirlines;
      case 'British Airways':
        return BritishAirways;
      case 'Ryanair':
        return Ryanair;
      default:
        return null;
    }
  };

  return <StyledCompanyLogo src={companyChoice(company)} />;
};
