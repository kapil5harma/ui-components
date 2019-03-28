import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import LoginForm from '../../app/auth/login';
import ForgotPasswordForm from '../../app/auth/forgot-password';
import ResetPasswordForm from '../../app/auth/reset-password';

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

class AuthLayout extends Component {
  render() {
    console.log(this.props)
    const { match: { path } } = this.props;
    return (
      <ParentContainer>
        <FormContainer>
        {
          path === '/auth' ? 
          <LoginForm /> : path === '/auth/forgot' ?
          <ForgotPasswordForm /> :
          path === '/auth/forgot/:token' ? <ResetPasswordForm {...this.props} /> : null
        }
          <ComponentContainer>
            <ReactSVG src='/assets/login.svg' />
          </ComponentContainer>
        </FormContainer>
      </ParentContainer>
    );
  }
}

export default AuthLayout;
