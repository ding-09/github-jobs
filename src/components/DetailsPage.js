import React from 'react';
import DetailsHeader from './DetailsHeader';
import DetailsDescription from './DetailsDescription';
import DetailsApply from './DetailsApply';
import DetailsFooter from './DetailsFooter';
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
    how_to_apply,
  } = jobDetails;

  // isolate href link
  const hrefArr = how_to_apply
    .split('<a href="')
    .filter((word) => word.includes('://'))
    .toString()
    .split('">');

  // isolate link within href
  const applyURL = hrefArr.filter((word) => word.includes('://')).toString();
  return (
    <Main>
      <DetailsHeader company={company} company_url={company_url} />
      <DetailsDescription
        created_at={created_at}
        location={location}
        title={title}
        type={type}
        description={description}
        applyURL={applyURL}
      />
      <DetailsApply how_to_apply={how_to_apply} />
      <DetailsFooter title={title} company={company} applyURL={applyURL} />
    </Main>
  );
};

const Main = styled.main`
  position: relative;
  top: -4rem;
`;

export default DetailsPage;
