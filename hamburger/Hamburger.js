import React from 'react';
import styled from 'styled-components';

const Hamburger = styled.div`
  width: 22.1px;
  height: 14.7px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  div {
    width: 100%;
    height: 2px;
    background-color: #9e9e9e;
  }
`;

const HamburgerToggle = props => {
  return (
    <Hamburger className='Hamburger'>
      <div />
      <div />
      <div />
    </Hamburger>
  );
};

export default HamburgerToggle;
