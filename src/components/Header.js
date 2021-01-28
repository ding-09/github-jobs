import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import headerBG from '../assets/desktop/bg-pattern-header.svg';
import logo from '../assets/desktop/logo.svg';
import ToggleModeBtn from './ToggleModeBtn';
import SearchBar from './SearchBar';

const Header = ({ changeMode }) => {
  let location = useLocation();
  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="logo" />
        <ToggleModeBtn changeMode={changeMode} />
        {location.pathname === '/' && <SearchBar />}
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
  position: relative;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 76%;
    margin: 0 auto;
  }
`;

export default Header;
