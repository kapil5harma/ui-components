import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  height: 100vh;
  background: #008d9c;
  h4 {
    padding: 1rem;
    margin: 0;
    font-size: 3rem;
  }
  ul {
    padding: 0 1rem;
    li {
      list-style: none;
      font-size: 1.875rem;
      line-height: 3;
    }
  }
`;

const StyledLayout = styled.div`
  display: flex;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  header {
    font-size: 3rem;
    background: #3d3d3d;
    color: #f2f2f2;
    padding: 1rem;
  }
  main {
    font-size: 2rem;
    padding: 1rem;
  }
`;

const LayoutWithSideBar = props => {
  const { children } = props;

  return (
    <StyledLayout>
      <StyledSideBar>
        <h4>ATS LOGO</h4>
        <ul>
          <li> Candidates </li>
          <li> Interviews </li>
          <li> Meetings</li>
        </ul>
      </StyledSideBar>
      <StyledContainer>
        <header>ATS</header>
        <main>{children}</main>
      </StyledContainer>
    </StyledLayout>
  );
};

export default LayoutWithSideBar;
