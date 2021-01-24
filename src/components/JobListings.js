import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainLightButton } from '../styles/Buttons';
import JobCard from './JobCard';

const JobListings = ({ totalListings }) => {
  const [loadMore, setLoadMore] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [currentListings, setCurrentListings] = useState([]);
  const [listings, setListings] = useState(totalListings);

  // initial page load
  useEffect(() => {
    setLoaded(true);
    if (listings.length > 12) {
      setLoadMore(true);
    }
    setCurrentListings(listings.splice(0, 12));
  }, []);

  // load more on button click
  const loadMoreContent = (e) => {
    if (listings.length <= 12) {
      setLoadMore(false);
    }
    let newListing = [...currentListings, ...listings.splice(0, 12)];
    setCurrentListings(newListing);
  };

  return (
    <Main>
      {loaded && (
        <JobSection>
          {currentListings.map((listing, index) => (
            <JobCard listing={listing} key={index} />
          ))}
        </JobSection>
      )}
      {loadMore && (
        <MainLightButton
          buttonText="Load More"
          type="button"
          onClick={loadMoreContent}
        />
      )}
    </Main>
  );
};

const Main = styled.main`
  width: 76%;
  margin: 12rem auto 0;
  padding: 2.5rem 0 10rem;
  border: 1px solid red;
  text-align: center;
`;

const JobSection = styled.section`
  width: 100%;
  margin-bottom: 5.6rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(35rem, 1fr));
  grid-template-rows: repeat(4, 22.8rem);
  gap: 4rem 3rem;
  text-align: left;
`;

export default JobListings;
