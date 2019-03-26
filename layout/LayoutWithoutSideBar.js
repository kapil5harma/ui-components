import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  header {
    display: flex;
    align-items: center;
    /* font-size: 3rem; */
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    height: 6.8rem; // This is equal to height of hamburger-wrapper in LayoutWithSidebar component
    background-color: #ffffff;
    /* padding: 1rem; */
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
    padding: 2.1rem;
  }
`;

const ProgressBar = styled.div`
  height: 9px;
  border-radius: 27px;
  background-color: #e0e0e0;
  /* background-color: #00e676; */
`;
const LayoutWithoutSideBar = props => {
  // console.log('props: ', props);
  const { children } = props;

  const routeName = 'Home / Add Candidate';
  return (
    <StyledContainer>
      <header>
        <div className='left'>
          <div className='Logo'>ATS</div>
          <div className='Route'>{routeName}</div>
        </div>
        <div className='right'>
          <ul>
            <li>My Profile</li>
            <li>Logout</li>
          </ul>
        </div>
      </header>
      <ProgressBar />
      <main>{children}</main>
    </StyledContainer>
  );
};

export default LayoutWithoutSideBar;
