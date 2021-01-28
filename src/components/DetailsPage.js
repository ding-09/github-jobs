import React from 'react';
import DetailsHeader from './DetailsHeader';
import DetailsDescription from './DetailsDescription';
import styled from 'styled-components';

const DetailsPage = ({ jobDetails }) => {
  const {
    company,
    company_url,
    type,
    created_at,
    location,
    title,
    description,
    how_to_apply
  } = jobDetails;
  return (
    <Main>
      <DetailsHeader company={company} company_url={company_url} />
      <DetailsDescription
        created_at={created_at}
        location={location}
        title={title}
        type={type}
        description={description}
        how_to_apply={how_to_apply}
      />
    </Main>
  );
};

const Main = styled.main`
  border: 1px solid red;
  position: relative;
  top: -4rem;
`;

export default DetailsPage;
