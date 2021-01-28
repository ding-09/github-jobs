import React from 'react';
import styled from 'styled-components';
import formatDate from './formatDate';
import { MainLightButton } from '../styles/Buttons';
import applyNowBG from '../assets/desktop/bg-pattern-detail-footer.svg';

const DetailsDescription = ({
  created_at,
  type,
  location,
  title,
  description,
  how_to_apply,
}) => {
  const applyDetails = how_to_apply.split(' ');
  return (
    <JobDetailsSection>
      <section className="header">
        <div className="job-info">
          <p>
            <span className="date">{formatDate(created_at)} ago </span>
            <span className="dot">&#8226; </span>
            <span className="job-type"> {type}</span>
          </p>
          <h1 className="job-title">{title}</h1>
          <h4 className="location">{location}</h4>
        </div>
        <MainLightButton buttonText="Apply Now" />
      </section>
      <section className="job-description">{description}</section>
    </JobDetailsSection>
  );
};

const JobDetailsSection = styled.section`
  width: 65%;
  min-width: 69rem;
  padding: 4.5rem 4.4rem;
  background: #ffffff;
  margin: 3.2rem auto;
  border: 1px solid orange;
  .header {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .job-info {
      h1 {
        margin: 0.8rem 0 1.3rem;
      }
      p {
        color: ${(props) => props.theme.secondaryColors.darkGrey};
        line-height: 1.6rem;
      }
      .date {
        padding-right: 0.5rem;
      }
      .dot {
        position: absolute;
        top: 2px;
      }
      .job-type {
        padding-left: 1.5rem;
      }
      .location {
        color: ${(props) => props.theme.primaryColors.violet};
      }
      button {
      }
    }
  }
  .job-description {
    margin: 3.2rem 0;
    font-size: 1.5rem;
    line-height: 2.5rem;
    white-space: pre-wrap;
  }
`;

export default DetailsDescription;
