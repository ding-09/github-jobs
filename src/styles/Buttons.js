import React from 'react';
import styled from 'styled-components';

const MainLightButton = ({ buttonText, type, onClick}) => {
return <Button type={type} onClick={onClick}>{buttonText}</Button>;
};

const SecondaryLightButton = ({ buttonText }) => {
  return <SecondaryButton>{buttonText}</SecondaryButton>;
};

const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  background: ${(props) => props.theme.primaryColors.violet};
  padding: 1.5rem 3.8rem;
  border: none;
  border-radius: 0.5rem;
  &:hover {
    background: ${(props) => props.theme.primaryColors.lightViolet};
  }
`;

const SecondaryButton = styled(Button)`
  background: rgba(89, 100, 224, 0.1);
  color: ${(props) => props.theme.primaryColors.violet};
  &:hover {
    background: rgba(89, 100, 224, 0.35);
  }
`;

export { MainLightButton, SecondaryLightButton };
