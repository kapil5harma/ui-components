import React, { Component } from 'react';
import styled from 'styled-components';
import LayoutWithoutSideBar from './LayoutWithoutSideBar';
import HamburgerToggle from '../hamburger/Hamburger';

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => (props.showLarge ? '20rem' : '8rem')};
  height: 100vh;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 0 1.875rem;
  transition: all 300ms ease 0s;
  .hamburger-wrapper {
    height: 6.8rem; // This is equal to height of header in LayoutWithoutSidebar component
    display: flex;
    align-items: center;
  }
  ul {
    padding: 0;
    li {
      list-style: none;
      white-space: nowrap;
      font-size: 1.875rem;
      line-height: 3;
    }
  }
`;

const StyledLayout = styled.div`
  display: flex;
`;

class LayoutWithSideBar extends Component {
  state = {
    showLarge: false
  };

  render() {
    const { children } = this.props;
    const { showLarge } = this.state;

    return (
      <StyledLayout>
        <StyledSideBar showLarge={showLarge}>
          <div className='hamburger-wrapper' onClick={() => this.setState({ showLarge: !showLarge })}>
            <HamburgerToggle showLarge={showLarge} />
          </div>
          <ul>
            <li>{showLarge ? 'Add Candidate' : 'AC'}</li>
            <li>{showLarge ? 'Candidate Pool' : 'CP'}</li>
          </ul>
        </StyledSideBar>
        <LayoutWithoutSideBar children={children} />
        {/* <LayoutWithoutSideBar {...children} /> */}
      </StyledLayout>
    );
  }
}

export default LayoutWithSideBar;
