import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DetailsPage from '../components/DetailsPage';
import ReactLoading from 'react-loading';

const Details = ({ match }) => {
  const [jobDetails, setJobDetails] = useState({});
  const [finishedLoading, setFinishedLoading] = useState(false);

  // fetch job details
  const fetchDetails = async () => {
    const details = await axios.get(
      `https://my-cors-proxy-69.herokuapp.com/jobs.github.com/positions/${match.params.id}.json?markdown=true`
    );
    setJobDetails(details.data);
    setFinishedLoading(true);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return finishedLoading ? (
    <DetailsPage jobDetails={jobDetails} />
  ) : (
    <ReactLoading
      type={'bubbles'}
      color={'#5964E0'}
      width={80}
      className="loader"
    />
  );
};

export default Details;
