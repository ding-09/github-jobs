import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from './formatDate';
import styled from 'styled-components';
import { IoBriefcaseOutline as BriefcaseIcon } from 'react-icons/io5';

const JobCard = ({ listing }) => {
  return (
    <Card className="card-color">
      <div className="logo">
        <BriefcaseIcon />
      </div>
      <div className="info-container">
        <div className="main-info">
          <p>
            <span className="date">{formatDate(listing.created_at)} ago </span>
            <span className="dot">&#8226; </span>
            <span className="job-type"> {listing.type}</span>
          </p>
          <h3 className="job-title">
            <Link to={`/details/${listing.id}`}>{listing.title}</Link>
          </h3>
          <p className="company">{listing.company}</p>
        </div>
        <h4 className="location">{listing.location}</h4>
      </div>
    </Card>
  );
};

const Card = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 4.7rem 3.2rem 3rem;
  border-radius: 0.6rem;
  .logo {
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 100%;
    transform: translateY(50%);
    border-radius: 1.5rem;
    overflow: hidden;
    background: ${(props) => props.theme.primaryColors.violet};
    svg {
      color: white;
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      top: 12.5px;
      left: 12.5px;
    }
  }
  .info-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .main-info {
      position: relative;
      h3 {
        margin: 1.5rem 0;
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
      .company {
        font-size: 1.4rem;
      }
    }
    .location {
      color: ${(props) => props.theme.primaryColors.violet};
      position: absolute;
      bottom: 0;
    }
  }
`;

export default JobCard;
