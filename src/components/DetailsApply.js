import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import applyNowBG from '../assets/desktop/bg-pattern-detail-footer.svg';

const DetailsApply = ({ how_to_apply }) => {
  return (
    <ApplySection>
      <div className="apply-info">
        <h3>How to Apply</h3>
        {parse(how_to_apply)}
      </div>
    </ApplySection>
  );
};

const ApplySection = styled.section`
  background: url(${applyNowBG}) no-repeat;
  background-size: cover;
  border-radius: 6px;
  padding: 4rem 4rem 5rem;
  width: 65%;
  min-width: 69rem;
  margin: 0 auto 7rem;
  .apply-info {
    color: #ffffff;
    h3 {
      color: #ffffff;
      padding-bottom: 2rem;
    }
    p {
        font-size: 1.4rem;
    }
    a {
      color: #ffffff;
      font-weight: bold;
      font-size: 1.4rem;
    }
  }
`;

export default DetailsApply;
