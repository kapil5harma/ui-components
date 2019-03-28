import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  header {
    display: flex;
    align-items: center;
    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.16);
    height: 6.8rem; // This is equal to height of hamburger-wrapper in LayoutWithSidebar component
    background-color: #ffffff;
    .left {
      display: flex;
      align-items: center;
      flex: 1;
      .Logo {
        font-size: 2.8rem;
        font-weight: 600;
        line-height: 1.21;
        color: #212121;
        padding: 0 1.5rem;
      }
      .Route {
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.22;
        color: #9e9e9e;
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
      ul {
        display: flex;
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          margin: 0 1.5rem;
          font-size: 1.6rem;
          font-weight: 600;
          line-height: 1.19;
          color: #212121;
        }
      }
    }
  }
  main {
    display: flex;
    flex: 1;
    background-color: #f1f1f2;
    height: 100%;
    /* padding: 2.1rem; */
  }
`;

const LayoutWithoutSideBar = props => {
  // console.log('props: ', props);
  const { children } = props;

  const routeName = 'Home';
  return (
    <StyledContainer>
      <header>
        <div className="left">
          <div className="Logo">ATS</div>
          <div className="Route">{routeName}</div>
        </div>
        <div className="right">
          <ul>
            <li>My Profile</li>
            <li>Logout</li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
    </StyledContainer>
  );
};

export default LayoutWithoutSideBar;
