import React from 'react';
import styled from 'styled-components';
import { IoBriefcaseOutline as BriefcaseIcon } from 'react-icons/io5';
import { SecondaryLightButton } from '../styles/Buttons';

const DetailsHeader = ({ company, company_url }) => {
  return (
    <StyledDetailsHeader>
      <div className="header-img">
        <BriefcaseIcon />
      </div>
      <div className="company-info">
        <h2>{company}</h2>
        <p>{company_url.split('//')[1]}</p>
      </div>
      <div className="button">
        <SecondaryLightButton
          buttonText="Company Site"
          onClick={() => (window.location.href = company_url)}
        />
      </div>
    </StyledDetailsHeader>
  );
};

const StyledDetailsHeader = styled.section`
  width: 65%;
  min-width: 69rem;
  height: 14rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 6px;
  .header-img {
    flex: 0 1 14rem;
    flex-shrink: 0;
    height: 100%;
    background: ${(props) => props.theme.primaryColors.lightViolet};
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      height: 50%;
      width: 50%;
      color: #ffffff;
    }
  }
  .company-info {
    padding-left: 4rem;
    flex: 1 1 60%;
    h2 {
      padding-bottom: 1.3rem;
    }
    p {
      color: ${(props) => props.theme.secondaryColors.darkGrey};
    }
  }
  .button {
    flex: 1 1 40%;
    text-align: right;
    padding-right: 4rem;
  }
`;

export default DetailsHeader;
