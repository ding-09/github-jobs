import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobListings from '../components/JobListings';
import ReactLoading from 'react-loading';

const Home = () => {
  // get all posts
  const [totalListings, setTotalListings] = useState([]);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  const getData = async () => {
    try {
      const data = await axios.get(
        `https://my-cors-proxy-69.herokuapp.com/jobs.github.com/positions.json?search=developer&page=${pageNum}`
      );
      // if length is 50 there might be another page / more listings
      if (data.data.length === 50) {
        setPageNum(pageNum + 1);
      } else {
        setFinishedLoading(true);
      }
      let listings = [...totalListings, ...data.data];
      setTotalListings(listings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [pageNum]);

  return finishedLoading ? (
    <JobListings totalListings={totalListings} />
  ) : (
    <ReactLoading type={'bubbles'} color={'#5964E0'} width={80} className="loader"/>
  );
};

export default Home;
