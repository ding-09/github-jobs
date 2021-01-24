import React from 'react';
import styled from 'styled-components';

const JobCard = ({ listing }) => {
  return (
    <Card>
      <div className="logo">
        <img src={listing.company_logo} alt="company logo" />
      </div>
      <div className="info-container">
        <div className="main-info">
          <p>
            <span>{listing.created_at}</span>
            <span className="dot">&#8226;</span>
            <span>{listing.type}</span>
          </p>
          <h3>{listing.title}</h3>
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
  border: 1px solid red;
  padding: 4.7rem 3.2rem 3rem;
  border-radius: 0.6rem;
  .logo {
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 100%;
    transform: translateY(50%);
    border: 1px solid blue;
    border-radius: 1.5rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info-container {
    border: 1px solid orange;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .main-info {
      h3 {
        margin: 1.6rem 0;
      }
      p {
        color: ${(props) => props.theme.secondaryColors.darkGrey};
        line-height: 1.6rem;
      }
    }
    .location {
      color: ${(props) => props.theme.primaryColors.violet};
    }
  }
`;

export default JobCard;
