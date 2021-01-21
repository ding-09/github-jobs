import React from 'react';
import styled from 'styled-components';
import { MainLightButton } from '../styles/Buttons';
import { BiSearchAlt2 as SearchIcon } from 'react-icons/bi';
import { MdLocationOn as LocationIcon } from 'react-icons/md';
import checkIcon from '../assets/desktop/icon-check.svg';

const SearchBar = () => {
  return (
    <Form onSubmit={() => alert('hello')}>
      <div className="form-group" id="description">
        <SearchIcon />
        <input type="text" />
      </div>
      <div className="form-group" id="location">
        <LocationIcon />
        <input type="text" />
      </div>
      <div className="form-group" id="submit">
        <div className="sub-form-group">
          <input type="checkbox" name="fullTime" />
          <label htmlFor="fullTime">Full Time Only</label>
        </div>
        <MainLightButton buttonText="Search" type="submit" />
      </div>
    </Form>
  );
};

const Form = styled.form`
  position: absolute;
  z-index: 1000;
  background: #ffffff;
  bottom: 0;
  transform: translateY(50%);
  width: 76%;
  height: 8rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  .form-group:not(#submit) {
    height: 100%;
    position: relative;
    border-right: 1px solid rgba(110, 128, 152, 0.2);
    display: flex;
    align-items: center;
    svg {
      position: absolute;
      width: 2.9rem;
      height: 2.9rem;
      color: ${(props) => props.theme.primaryColors.violet};
    }
    input {
      width: 100%;
      height: 50%;
      padding-top: 4px;
      border: none;
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }
  #description {
    flex: 1 1 46rem;
    input {
      padding-left: 7rem;
    }
    svg {
      left: 3rem;
    }
  }
  #location {
    flex: 1 1 30rem;
    input {
      padding-left: 5.5rem;
    }
    svg {
      left: 1.5rem;
    }
  }
  #submit {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 1 34.5rem;
    padding-left: 0.5rem;
    .sub-form-group {
      display: inline-block;
      label {
        display: inline-block;
        font-weight: 700;
        padding-left: 4.6rem;
        padding-top: 7px;
        font-size: 1.4rem;
      }
      input[type='checkbox'] {
        appearance: none;
        background: rgba(24, 43, 45, 0.1);
        height: 2.4rem;
        width: 2.4rem;
        border-radius: 3px;
        position: absolute;
        cursor: pointer;
        &:checked {
          background: ${(props) => props.theme.primaryColors.violet};
          &:after {
            content: url(${checkIcon});
            position: absolute;
            top: 6px;
            left: 5px;
          }
        }
      }
    }
  }
`;

export default SearchBar;
