import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  width: 22.1px;
  height: 14.7px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  #one,
  #two,
  #three {
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.bgGrey};
  }
  #one {
    transform: ${props => (props.showLarge ? 'rotate(45deg)' : 'unset')};
    transform-origin: ${props => (props.showLarge ? 'center' : 'unset')};
    top: ${props => (props.showLarge ? '25%' : 'unset')};
    transition: all 200ms ease 0s;
  }
  #two {
    display: ${props => (props.showLarge ? 'none' : 'unset')};
  }
  #three {
    transform: ${props => (props.showLarge ? 'rotate(-45deg)' : 'unset')};
    transform-origin: ${props => (props.showLarge ? 'center' : 'unset')};
    top: ${props => (props.showLarge ? '-25%' : 'unset')};
    transition: all 200ms ease 0s;
  }
`;

const Hamburger = props => {
  return (
    <StyledHamburger className='hamburger' showLarge={props.showLarge}>
      <div id='one' />
      <div id='two' />
      <div id='three' />
    </StyledHamburger>
  );
};

export default Hamburger;
