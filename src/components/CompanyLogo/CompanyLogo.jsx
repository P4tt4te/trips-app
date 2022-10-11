import React from 'react';
import styled, { css } from 'styled-components';
// liste des images companies
import AirFrance from '../../assets/companies/air_france.svg';
import AmericanAirlines from '../../assets/companies/american_airlines.svg';
import BritishAirways from '../../assets/companies/british_airways.svg';

const StyledCompanyLogo = styled.img`
  height: 15px;
`;

export const CompanyLogo = ({ company }) => {
  const companyChoice = (company) => {
    switch (company) {
      case 'Air France':
        return AirFrance;
        break;
      case 'American Airlines':
        return AmericanAirlines;
        break;
      case 'British Airways':
        return BritishAirways;
        break;
      default:
        return null;
    }
  };

  return <StyledCompanyLogo src={companyChoice(company)} />;
};
