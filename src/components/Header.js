import React from 'react';
import styled from 'styled-components';
import headerBG from '../assets/desktop/bg-pattern-header.svg';
import logo from '../assets/desktop/logo.svg';
import ToggleModeBtn from './ToggleModeBtn';

const Header = ({ changeMode }) => {
  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="logo" />
        <ToggleModeBtn changeMode={changeMode} />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  min-height: 16.2rem;
  background: url(${headerBG}) no-repeat;
  background-size: cover;
  padding: 4.4rem 0 8.4rem;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 76%;
    margin: 0 auto;
  }
`;

export default Header;
