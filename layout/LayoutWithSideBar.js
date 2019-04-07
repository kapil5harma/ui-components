import React, { Component } from 'react';
import styled from 'styled-components';
import LayoutWithoutSideBar from './LayoutWithoutSideBar';
import HamburgerToggle from '../hamburger/Hamburger';
import { Link } from 'react-router-dom';

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => (props.showLarge ? '20rem' : '8rem')};
  height: 100vh;
  z-index: 1;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
  background-color: ${props => props.theme.buttonBGLight};
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
            <li>
              <Link to={'add-candidate'}>{showLarge ? 'Add Candidate' : 'AC'}</Link>
            </li>
            <li>
              <Link to={'add-candidate'}>{showLarge ? 'Candidate Pool' : 'CP'}</Link>
            </li>
          </ul>
        </StyledSideBar>
        <LayoutWithoutSideBar children={children} />
        {/* <LayoutWithoutSideBar {...children} /> */}
      </StyledLayout>
    );
  }
}

export default LayoutWithSideBar;
