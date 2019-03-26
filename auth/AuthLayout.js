import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import LoginForm from '../../app/auth/login';

const ParentContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  max-width: 105rem;
  max-height: 50rem;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #bdbdbd;
`;

const ComponentContainer = styled.div`
  margin: 1rem 6rem;
`;

class AuthLayout extends Component {
  render() {
    return (
      <ParentContainer>
        <FormContainer>
          <ComponentContainer>
            <LoginForm />
          </ComponentContainer>
          <ComponentContainer>
            <ReactSVG src='/assets/login.svg' />
          </ComponentContainer>
        </FormContainer>
      </ParentContainer>
    );
  }
}

export default AuthLayout;
