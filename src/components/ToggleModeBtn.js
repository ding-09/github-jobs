import React, { useState } from 'react';
import styled from 'styled-components';
import { IoSunny } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';

const ToggleModeBtn = ({ changeMode }) => {
  const [toggleStatus, setToggleStatus] = useState(false);

  const handleChange = () => {
    setToggleStatus(!toggleStatus);
    changeMode(!toggleStatus);
  };
  return (
    <ToggleContainer>
      <IoSunny />
      <input type="checkbox" onChange={handleChange} />
      <FaMoon id="moon"/>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.article`
  width: 11.2rem;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #moon {
    font-size: 1.4rem;
  }
  svg {
    color: white;
    font-size: 2rem;
  }
  input[type='checkbox'] {
    width: 4.8rem;
    height: 2.4rem;
    border-radius: 1.2rem;
    border: none;
    background: #ffffff;
    appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      background: ${(props) => props.theme.primaryColors.violet};
      transition: transform 0.3s ease;
    }
    &:hover {
      &:before {
        background: ${(props) => props.theme.primaryColors.lightViolet};
      }
    }
    &:checked {
      &:before {
        transform: translateX(2.4rem);
      }
    }
  }
`;

export default ToggleModeBtn;
