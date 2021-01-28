import React from 'react';
import styled from 'styled-components';
import { MainLightButton } from '../styles/Buttons';

const DetailsFooter = ({ title, company, applyURL }) => {
  return (
    <StyledDetailsFooter>
      <div className="position-info">
        <h3>{title}</h3>
        <p>{company}</p>
      </div>
      <MainLightButton
        buttonText="Apply Now"
        onClick={() => (window.open(applyURL, '_blank'))}
      />
    </StyledDetailsFooter>
  );
};

const StyledDetailsFooter = styled.footer`
  width: 100%;
  padding: 0 15%;
  height: 9.5rem;
  position: absolute;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .position-info {
    h3 {
      margin-bottom: 1rem;
    }
    p {
      color: ${(props) => props.theme.secondaryColors.darkGrey};
    }
  }
`;

export default DetailsFooter;
